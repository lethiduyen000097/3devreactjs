import React from "react";
//import logo from './logo.svg';
//import './App.css';
import FC from "./Components/FunctionalComp";
import { ClassComp, ClassComp1 } from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";
import ContainedButtons from "./Components/Button";
import ButtonTestFn from "./Components/ButtonTest";
import Footer2 from "./Components/footer2.component";

function App() {
  return (
    <div>
        <h1>Hello</h1>
        <p>9 am 05/07/2021</p>
        <p> Viết component sử dụng Function(ưu tiên) và Class; import, export các Component trong app mới tạo. </p>
          <FC />
          <ClassComp />
          <ClassComp1 />
          <Click /> 
          <Counter />
          <ParentComp /> 
          <ContainedButtons />
          <p>4 pm 05/07/2021</p>
          <p>Viết hàm kiểu const = () => ...;</p>
          <p>Sử dụng Materrial UI cho Button</p> 
          <ButtonTestFn />
          <Footer2 />
    </div>
    );
}

export default App;

























// // 2
// import React from "react";
// import Classprops from "./Classprops";
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Classprops name="Learn 1" place="Placex" />
//         <Classprops name="Learn 2" place="Placey" />
//         <Classprops name="Learn 3" placece="Phacez" />
//       </div>
//       );
//   }
// }
// export default App;
