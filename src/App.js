// import logo from './logo.svg';
import "./App.css";
import Courty from "./Container/Country/Courty";
import City from "./Container/City/City";
import State from "./Container/State/State";
import Props from "./Container/Props/Props";
import Countufun from "./Container/Countyfun/Countufun";
import Cityfun from "./Container/Cityfun/Cityfun";
import Password from "./Container/Password/Password";

function App() {
  const a = 25

  return (
    <div>
      <Password/>
      {/* <Countufun/>
      <Cityfun/>
      <Courty name="India"/>
      <City/>
      <State />
      <Props a={a}/> */}
    </div>
  );
}

export default App;
