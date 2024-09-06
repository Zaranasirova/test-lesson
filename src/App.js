import React from "react";
import TopHeader from "./components/TopHeader";
import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import GlobalContext from "./utils/MainContext";

const App = () => {
  return (
    <GlobalContext>
      <TopHeader />
      <Routes>
        <Route path="/" element={<Todo />}></Route>
      </Routes>
    </GlobalContext>
  );
};

export default App;
