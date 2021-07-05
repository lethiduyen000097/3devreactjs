import React from "react";
//import logo from './logo.svg';
//import './App.css';
import FC from "./Components/FunctionalComp";
import { ClassComp, ClassComp1 } from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";


function App() {
  return (
    <div>
          <h1>Hello</h1>
          <FC />
          <ClassComp />
          <ClassComp1 />
          <Click /> 
          <Counter />
          <ParentComp />
    </div>
    );
}

export default App;
