import Card from './Card.jsx';
import nearestItem from '../utilites/nearestItem.js';
import AddTask from './AddTask.jsx';


export default function Column({ name, tasksList, updateList, nearestIdState }) {
  const { nearestId, setNearestId } = nearestIdState;

  const tasks = tasksList.filter(task => task.column === name);



  const getNearestItem = (y, dragid) => {
    const container = document.getElementById(name);
    const childs = container.querySelectorAll(`div:not([id="${dragid}"])`);

    return nearestItem(Array.from(childs), y);
  }

  const handleDragStart = (e) => {

    e.dataTransfer.setData("cardId", e.target.id);
  }
  const handleDragOver = (e, name) => {
    e.preventDefault();

    const nearest = getNearestItem(e.clientY);
    if (nearest?.id !== nearestId && nearest !== null) setNearestId(nearest.id)
  }

  const handleDragLeave = (e, name) => {
    e.preventDefault();
  }

  const handleDrop = (e, name) => {
    e.preventDefault();
    const dragid = e.dataTransfer.getData("cardId");


    const nearest = getNearestItem(e.clientY, dragid);
    const arrayList = [...tasksList]
    const itemidx = arrayList.findIndex(task => task.id === dragid);
    const item = arrayList[itemidx];
    arrayList.splice(itemidx, 1);

    if (nearest) {
      // colocar el elemento antes
      const nearestIndex = arrayList.findIndex(task => task.id === nearest.id);
      arrayList.splice(nearestIndex, 0, { task: item.task, column: name, id: item.id })

    }
    else {
      // colocar el elemento al final
      const lastColumnItem = arrayList.findLastIndex(task => task.column === name);
      arrayList.splice(lastColumnItem + 1, 0, { task: item.task, column: name, id: item.id })
    }
    setNearestId(null);
    updateList(arrayList);

  }



  const handleDragEnd = (e) => {

    setNearestId(null);
  }

  return (
    <> <div id={name} className='flex flex-col gap-2 bg-purple-heart-300 w-1/4  rounded-md p-2 min-h-16 select-none '
      onDragStart={(e) => handleDragStart(e)}
      onDragOver={(e) => handleDragOver(e, name)}
      onDragLeave={(e) => handleDragLeave(e, name)}
      onDrop={(e) => handleDrop(e, name)}
      onDragEnd={(e) => handleDragEnd(e)}
    >
      <h2 className='text-2xl font-bold text-center text-purple-heart-800'>{name}</h2>
      {tasks.map(task => {
        return <Card key={task.id} text={task.task} id={task.id} nearestId={nearestId} />
      })}

      <AddTask updateList={updateList} tasksList={tasksList} columnName={name} />
    </div>
    </>
  )
}




