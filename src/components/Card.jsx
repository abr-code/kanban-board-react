import { motion } from "framer-motion"
import { useState } from "react"

export default function Card({ text, id, nearestId }) {
  const [cardState, setCardState] = useState({ dragging: false, dragover: false })
  const draggingOver = (nearestId === id) ? true : false

  const hanldeDragStart = (e) => {
    e.dataTransfer.setData("cardId", e.target.id)
    setCardState({ ...cardState, dragging: true })
  }



  const handleDragEnd = (e) => {
    setCardState({ ...cardState, dragging: false, dragover: false })
  }



  return (
    <>
      <motion.div
        layout
        layoutId={id}
        draggable
        id={id}
        className={
          `flex flex-col gap-2  rounded-md p-2 bg-purple-heart-100 text-purple-heart-800 
          ${cardState.dragging ? '!opacity-50' : ''} hover:cursor-move 
          ${draggingOver ? 'border-t-8 border-purple-heart-800' : 'border-t-8 border-transparent'}`
        }

        onDragEnd={(e) => handleDragEnd(e)}
        onDragStart={(e) => hanldeDragStart(e)}
      >
        <h2 className='text-base text-pretty '>{text}</h2>
      </motion.div >
    </>
  )

}
