import React from "react";
//import logo from './logo.svg';
//import './App.css';
import FC from "./Components/FunctionalComp";
import { ClassComp, ClassComp1 } from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter";


function App() {
  return (
    <div>
          <h1>Hello</h1>
          <FC />
          <ClassComp />
          <ClassComp1 />
          <Click />
          <Counter />
    </div>
    );
}

export default App;
