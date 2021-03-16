import { useState } from "react";
import Attempts from "./components/Attempts";
import CodePegs from "./components/CodePegs";
import KeyPegs from "./components/KeyPegs";
import Reset from "./components/Reset";
import Solution from "./components/Solution";
import StopWatch from "./components/Stopwatch";
import { randomNumber } from "./service";

const App = () => {
  const [solution, setSolution] = useState([randomNumber(5), randomNumber(5), randomNumber(5), randomNumber(5)])
  const [attempt, setAttempt] = useState([]) // one row
  const [currentAttempt, setCurrentAttempts] = useState(0)
  const [solutionCheck, setSolutionCheck] = useState({})
  const [allSolutionChecks, setAllSolutionChecks] = useState([])
  const [pegs, setPegs] = useState([])
  const [reset, setReset] = useState(true)
  const [solutionPegs, setSolutionPegs] = useState([])
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 })
  const [intv, setIntv] = useState()

  let updatedS = time.s
  let updatedM = time.m
  let updatedH = time.h

  const stopwatch = () => {
    if (updatedM === 60) {
      updatedH++
      updatedM = 0
    }
    if (updatedS === 60) {
      updatedM++
      updatedS = 0
    }
    updatedS++
    return setTime({ s: updatedS, m: updatedM, h: updatedH })
  }

  const startStopwatch = () => {
    stopwatch()
    setIntv(setInterval(stopwatch, 1000))
  }

  const stopStopwatch = () => {
    clearInterval(intv)
    setTime({ s: 0, m: 0, h: 0 })
  }

  return (
    <div className="App">
      <StopWatch time={time} />
      <CodePegs setAttempt={setAttempt} attempt={attempt} solution={solution} setAllSolutionChecks={setAllSolutionChecks} setPegs={setPegs} setCurrentAttempts={setCurrentAttempts} setSolutionCheck={setSolutionCheck} />
      <Reset reset={reset} setSolution={setSolution} setAllSolutionChecks={setAllSolutionChecks} setCurrentAttempts={setCurrentAttempts} setSolutionCheck={setSolutionCheck} setPegs={setPegs} setReset={setReset} setSolutionPegs={setSolutionPegs} startStopwatch={startStopwatch} />
      <Solution solution={solution} currentAttempt={currentAttempt} solutionCheck={solutionCheck} setReset={setReset} setSolution={setSolution} solutionPegs={solutionPegs} setSolutionPegs={setSolutionPegs} stopStopwatch={stopStopwatch} />
      <Attempts pegs={pegs} />
      <KeyPegs allSolutionChecks={allSolutionChecks} />
    </div>
  );
}

export default App;
