import { useState } from 'react';
import generateUniqueID from '../utilites/generateUniqueId';
import { motion } from 'framer-motion';

export default function AddTask({ updateList, tasksList, columnName }) {
  const [active, setActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      task: e.target[0].value,
      column: columnName,
      id: generateUniqueID(),
    }

    updateList([...tasksList, task])
    setActive(false)
  }
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setActive(false)
    }
  }

  return (
    <>
      {
        active ? <motion.form layout className='flex flex-col gap-2 mt-auto' onSubmit={(e) => handleSubmit(e)}>
          <input onKeyDown={(e) => handleKeyDown(e)} className='rounded-md p-2 bg-gray-50 w-full' required autoFocus type="text" placeholder='Add new task' />
          <button className='rounded-md p-2 bg-purple-heart-500' type="submit">Add</button>
        </motion.form>
          : <motion.button
            layout
            onClick={() => setActive(true)}
            className='bg-purple-heart-500 rounded-md p-2  text-center mt-auto'>
            add new task ＋
          </motion.button>
      }
    </>
  )
}
