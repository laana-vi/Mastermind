import { useState } from "react";
import Attempts from "./components/Attempts";
import Buttons from "./components/Buttons";
import Checker from "./components/Checker";
import Solution from "./components/Solution";
import { randomNumber } from "./service";

const App = () => {
  const [attempt, setAttempt] = useState([])
  const [solution, setSolution] = useState([randomNumber(), randomNumber(), randomNumber(), randomNumber()])
  const [checks, setChecks] = useState([])
  const [check, setCheck] = useState({})
  const [pics, setPics] = useState([])
  const [attempts, setAttempts] = useState(0)


  return (
    <div className="App">
      <Buttons setAttempt={setAttempt} attempt={attempt} solution={solution} setChecks={setChecks} setPics={setPics} setAttempts={setAttempts} setCheck={setCheck} />
      <Attempts pics={pics} />
      <Checker checks={checks} />
      <Solution solution={solution} attempts={attempts} check={check}/>
    </div>
  );
}

export default App;
