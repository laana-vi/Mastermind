import { useState } from "react";
import Buttons from "./components/Buttons";
import { randomNumber } from "./service";

const App = () => {
  const [attempt, setAttempt] = useState([])
  const [solution] = useState([randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()])
  return (
    <div className="App">
      <Buttons setAttempt={setAttempt} attempt={attempt} solution={solution} />
    </div>
  );
}

export default App;
