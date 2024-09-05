import React from "react";
import TopHeader from "./components/TopHeader";
import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <>
      <TopHeader />
      <Routes>
        <Route path="/" element={<Todo />}></Route>
      </Routes>
    </>
  );
};

export default App;
