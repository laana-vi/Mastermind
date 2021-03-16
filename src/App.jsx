import { useState } from "react";
import Attempts from "./components/Attempts";
import CodePegs from "./components/CodePegs";
import KeyPegs from "./components/KeyPegs";
import Reset from "./components/Reset";
import Solution from "./components/Solution";
import { randomNumber } from "./service";

const App = () => {
  const [solution, setSolution] = useState([randomNumber(5), randomNumber(5), randomNumber(5), randomNumber(5)])
  const [attempt, setAttempt] = useState([]) // one row
  const [currentAttempt, setCurrentAttempts] = useState(0)
  const [solutionCheck, setSolutionCheck] = useState({})
  const [allSolutionChecks, setAllSolutionChecks] = useState([])
  const [pegs, setPegs] = useState([])
 
  const [reset, setReset] = useState(false)


  return (
    <div className="App">
      <Reset reset={reset} />
      <Solution solution={solution} currentAttempt={currentAttempt} solutionCheck={solutionCheck} setReset={setReset} setSolution={setSolution} />
      <Attempts pegs={pegs} />
      <KeyPegs allSolutionChecks={allSolutionChecks} />
      <CodePegs setAttempt={setAttempt} attempt={attempt} solution={solution} setAllSolutionChecks={setAllSolutionChecks} setPegs={setPegs} setCurrentAttempts={setCurrentAttempts} setSolutionCheck={setSolutionCheck} />


    </div>
  );
}

export default App;
