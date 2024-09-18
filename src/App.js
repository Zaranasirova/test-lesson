import React from "react";
import TopHeader from "./components/TopHeader";
import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import GlobalContext from "./utils/MainContext";
import Fibonacci from "./components/Fibonacci";
import Algoritm from "./components/Algoritm";
import Redux from "./components/Redux";

const App = () => {
  return (
    <GlobalContext>
      <TopHeader />
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/fibonacci" element={<Fibonacci/>}></Route>
        <Route path="/alqoritm" element={<Algoritm/>}></Route>
        <Route path="/redux" element={<Redux/>}></Route>
      </Routes>
    </GlobalContext>
  );
};

export default App;
