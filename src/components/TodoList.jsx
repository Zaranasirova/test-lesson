import React, { useContext } from 'react'
import { CiCircleRemove} from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MainContext } from '../utils/MainContext';
const TodoList = ({data,index}) => {
  const {removeTodo}=useContext(MainContext)
  return (
   <div className='todo-list'>
     <p className='title'>{data}</p>
     <div className='todo-icons'>
    <CiCircleRemove onClick={()=>removeTodo(index)}  />
     <FaEdit />
     </div>
   </div>
  )
}

export default TodoList