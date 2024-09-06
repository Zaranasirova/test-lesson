import React, { useContext, useState } from "react";
import TodoList from "../components/TodoList";
import { MainContext } from "../utils/MainContext";
const Todo = () => {
  const {todoValue,setTodoValue,addTodo,todos} = useContext(MainContext);
  return (
    <section className="todo-pages">
      <form>
        <label>Todo girin</label>
        <input
          type="text"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        ></input>
        <button onClick={addTodo}> Hazırla</button>
      </form>

      {
        todos.map((item,index)=>
          <TodoList data={item} key={index}/>
        )
      }
    
    </section>
  );
};

export default Todo;
