// import logo from './logo.svg';
import "./App.css";
import Courty from "./Container/Country/Courty";
import City from "./Container/City/City";
import State from "./Container/State/State";
import Props from "./Container/Props/Props";
import Countufun from "./Container/Countyfun/Countufun";
import Cityfun from "./Container/Cityfun/Cityfun";
import Password from "./Container/Password/Password";
import { useState } from "react";
import Incrementdec from "./Container/Incrementdec/Incrementdec";
import Next from "./Next/Next";
import Add from "./Next/Add";
import Preclass from "./Next/Preclass";
import Lifecycle from "./Container/Life-cycle/Lifecycle";

function App() {
  const a = 25;

  const [theme, setTheme] = useState("LIGHT");

  const themStyle = {
    backgroundColor: theme === "LIGHT" ? "white" : "black",
    colour: theme === "LIGHT" ? "black" : "white",
  };
  const themclick = () => {
    setTheme(theme === "LIGHT" ? "dark" : "LIGHT");
  };

  return (
    <div className="aaa" style={themStyle}>
      <button onClick={() => themclick()}>
        {theme === "LIGHT" ? <i class="fa-solid fa-moon"></i>  :  <i class="fa-solid fa-sun"></i>}
      </button>
      {/* <Next/> */}
      {/* <Preclass/> */}
      <Lifecycle/>
      
      {/* <Add/> */}
      
      {/* <Password />
      <Incrementdec/>
      <Countufun/>
      <Cityfun/>
      <Courty name="India"/>
      <City/>
      <State />
      <Props a={a}/> */}
    </div>
  );
}

export default App;
