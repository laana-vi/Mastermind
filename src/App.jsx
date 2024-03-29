import { useCallback, useEffect, useState } from "react";
import Attempts from "./components/Attempts";
import CodePegs from "./components/CodePegs";
import KeyPegs from "./components/KeyPegs";
import Reset from "./components/Reset";
import Solution from "./components/Solution";
import StartGame from "./components/StartGame";
import StopWatch from "./components/Stopwatch";
import { GlobalStyle } from "./components/styled/GlobalStyle";
import { codePegs } from "./variables/codePegs";
import Confetti from 'react-confetti'

const App = () => {
  const [solution, setSolution] = useState([])
  const [attempt, setAttempt] = useState([])
  const [attempts] = useState(8)
  const [pegsInGame, setPegsInGame] = useState(null)
  const [currentAttempt, setCurrentAttempts] = useState(0)
  const [solutionCheck, setSolutionCheck] = useState({})
  const [allSolutionChecks, setAllSolutionChecks] = useState([])
  const [pegs, setPegs] = useState([])
  const [reset, setReset] = useState(false)
  const [solutionPegs, setSolutionPegs] = useState([])
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 })
  const [stopwatch, setTStopwatch] = useState()
  const [start, setStart] = useState(true)
  const [win, setWin] = useState(null)

  let updatedS = time.s
  let updatedM = time.m
  let updatedH = time.h

  const runStopwatch = () => {
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
    runStopwatch()
    setTStopwatch(setInterval(runStopwatch, 1000))
  }

  const pauseStopwatch = useCallback(() => {
    clearInterval(stopwatch)
  }, [stopwatch])

  const stopStopwatch = useCallback(() => {
    clearInterval(stopwatch)
    setTime({ s: 0, m: 0, h: 0 })
  }, [stopwatch])

  useEffect(() => {
    if (solutionCheck.exact === pegsInGame) {
      let solutionArr = []
      for (let i = 0; i < pegsInGame; i++) {
        solutionArr.push([codePegs[solution[i]]])
      }
      setSolutionPegs(solutionArr)
      setReset(true)
      pauseStopwatch()
      setWin(true)
    }
    if (currentAttempt === attempts && solutionCheck.exact !== pegsInGame) {
      let solutionArr = []
      for (let i = 0; i < pegsInGame; i++) {
        solutionArr.push([codePegs[solution[i]]])
      }
      setSolutionPegs(solutionArr)
      setReset(true)
      pauseStopwatch()
      setWin(false)
    }
  }, [currentAttempt, solution, solutionCheck, pauseStopwatch, attempts, pegsInGame])

  return (
    <div className='app'>
      <div className="bg"></div>
      <GlobalStyle win={win} />
      {start ?
        <StartGame setPegsInGame={setPegsInGame} pegsInGame={pegsInGame} start={start} setSolution={setSolution} setAllSolutionChecks={setAllSolutionChecks} setCurrentAttempts={setCurrentAttempts} setSolutionCheck={setSolutionCheck} setPegs={setPegs} setStart={setStart} setSolutionPegs={setSolutionPegs} startStopwatch={startStopwatch} />
        :
        <>
        {win !== null && (win === true ? <Confetti></Confetti> :<></>)}
          <div className='game'>
            <Reset reset={reset} />
            <StopWatch time={time} />
            <Solution solution={solution} currentAttempt={currentAttempt} solutionCheck={solutionCheck} setReset={setReset} setSolution={setSolution} solutionPegs={solutionPegs} setSolutionPegs={setSolutionPegs} stopStopwatch={stopStopwatch} />
            <div className="pegs">
              <div className="atempts">
                <Attempts attempts={attempts} pegs={pegs} pegsInGame={pegsInGame} />
              </div>
              <div className="key-pegs">
                <KeyPegs pegsInGame={pegsInGame} attempts={attempts} allSolutionChecks={allSolutionChecks} />
              </div>
            </div>
            <CodePegs pegsInGame={pegsInGame} setAttempt={setAttempt} attempt={attempt} solution={solution} setAllSolutionChecks={setAllSolutionChecks} setPegs={setPegs} setCurrentAttempts={setCurrentAttempts} setSolutionCheck={setSolutionCheck} />
          </div>
        </>
      }
    </div>
  )
}
export default App;
