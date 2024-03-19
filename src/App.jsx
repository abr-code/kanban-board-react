import './App.css'
import Column from './components/Column.jsx'
import { useTasks } from './hooks/useTasks';
import { useState } from 'react';
import DeleteTask from './components/DeleteTask.jsx';

function App() {

  const { tasksList, updateList } = useTasks();
  const [nearestId, setNearestId] = useState(null);

  return (
    <div className="bg-purple-heart-100 min-h-screen ">
      <h1 className="pt-10 text-4xl font-bold text-center text-purple-heart-800">Kanban board React</h1>
      <div className='flex justify-center gap-2 w-full mt-10 lg:w-10/12 lg:mx-auto min-w-[700px]'>
        <Column id="Todo" name="Todo" tasksList={tasksList} updateList={updateList} nearestIdState={{ nearestId, setNearestId }} />
        <Column id="Doing" name="Doing" tasksList={tasksList} updateList={updateList} nearestIdState={{ nearestId, setNearestId }} />
        <Column id="Done" name="Done" tasksList={tasksList} updateList={updateList} nearestIdState={{ nearestId, setNearestId }} />
        {/* <Column id="delete" name="delete" tasksList={tasksList} updateList={updateList} draggingEl={elementRef} /> */}
        <DeleteTask updateList={updateList} tasksList={tasksList} nearestIdState={{ nearestId, setNearestId }} />
      </div>
    </div>



  )
}

export default App
