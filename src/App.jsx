import { useState } from "react";
import Attempts from "./components/Attempts";
import Buttons from "./components/Buttons";
import { randomNumber } from "./service";

const App = () => {
  const [attempts, setAttempts] = useState([])
  const [attempt, setAttempt] = useState([])
  const [solution] = useState([randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()])
  return (
    <div className="App">
      <Buttons setAttempt={setAttempt} attempt={attempt} solution={solution} setAttempts={setAttempts} />
      <Attempts attempts={attempts} />
    </div>
  );
}

export default App;
