import React from 'react'
import { CiCircleRemove} from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
const TodoList = ({data}) => {
  return (
   <div className='todo-list'>
     <p className='title'>{data}</p>
     <div className='todo-icons'>
    <CiCircleRemove />
     <FaEdit />
     </div>
   </div>
  )
}

export default TodoList