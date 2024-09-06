import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();
export const GlobalContext = ({ children }) => {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prev) => {
      const updatedTodo = [...prev, todoValue];
      console.log(updatedTodo);
      return updatedTodo;
    });
    setTodoValue("");
  };

  const removeTodo = (indexTodo) => {
    const removeUpdatedTodos = todos.filter(
      (item, index) => index !== indexTodo
    );
    if (removeUpdatedTodos) {
      setTodos(removeUpdatedTodos);
    }
  };

  const globalData = { todoValue, setTodoValue, addTodo, todos, removeTodo };
  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};
export default GlobalContext;
