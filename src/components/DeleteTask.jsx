import { useState } from 'react';

export default function DeleteTask({ updateList, tasksList, nearestIdState }) {
  const [active, setActive] = useState(false);

  const { nearestId, setNearestId } = nearestIdState




  const handleDrop = (e) => {
    const taskid = e.dataTransfer.getData("cardId");
    updateList([...tasksList.filter(task => task.id !== taskid)])

    setNearestId(null);

    setActive(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    if (active) return
    setActive(true);
  }

  const handleDragLeave = (e) => {
    e.preventDefault();
    setActive(false);
  }


  return (
    <div
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      className={`flex flex-col gap-2 ${active ? 'bg-red-400' : 'bg-purple-heart-300'} w-1/4  rounded-md p-2 min-h-16 select-none`} >
      <h2 className='text-2xl font-bold text-center text-purple-heart-800'> Delete </h2>
      <div onDragOver={(e) => handleDragOver(e)} className={`text-4xl text-purple-heart-800 m-auto ${active ? 'animate-bounce' : ''}`}>🗑️</div>
    </div >
  )
}
