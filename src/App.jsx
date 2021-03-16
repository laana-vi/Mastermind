import { useState } from "react";
import Attempts from "./components/Attempts";
import Buttons from "./components/Buttons";
import Checker from "./components/Checker";
import { randomNumber } from "./service";

const App = () => {
  const [attempt, setAttempt] = useState([])
  const [solution] = useState([randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()])
  const [checks, setChecks] = useState([])
  const [pics, setPics] = useState([])


  return (
    <div className="App">
      <Buttons setAttempt={setAttempt} attempt={attempt} solution={solution} setChecks={setChecks} setPics={setPics} />
      <Attempts pics={pics} />
      <Checker checks={checks} />
    </div>
  );
}

export default App;
