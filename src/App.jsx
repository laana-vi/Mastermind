import { useState } from "react";
import Attempts from "./components/Attempts";
import Buttons from "./components/Buttons";
import Checker from "./components/Checker";
import { randomNumber } from "./service";

const App = () => {
  const [attempts, setAttempts] = useState([])
  const [attempt, setAttempt] = useState([])
  const [solution] = useState([randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()])
  const [checks, setChecks] = useState([])

  return (
    <div className="App">
      <Buttons setAttempt={setAttempt} attempt={attempt} solution={solution} setAttempts={setAttempts} setChecks={setChecks} />
      <Attempts attempts={attempts} />
     <Checker checks={checks}/>
    </div>
  );
}

export default App;
