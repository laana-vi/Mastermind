import { randomNumber } from "../service"

const Reset = ({ reset, setSolution, setAllSolutionChecks, setCurrentAttempts, setSolutionCheck, setPegs, setReset, setSolutionPegs, startStopwatch, stopStopwatch, setWin, pegsInGame, setPegsInGame }) => {

    const handleClick = () => {
        let solutionPegsArr = []
        for (let i = 0; i < pegsInGame; i++) {
            solutionPegsArr.push(randomNumber(pegsInGame + 1))
        }
        setSolution(solutionPegsArr)
        setAllSolutionChecks([])
        setCurrentAttempts(0)
        setSolutionCheck({})
        setPegs([])
        setReset(false)
        setSolutionPegs([])
        stopStopwatch()
        startStopwatch()
        setWin(null)
    }
    return (
        <div>
            {
                !pegsInGame &&
                <>
                    <button onClick={() => setPegsInGame(3)}>EASY</button>
                    <button onClick={() => setPegsInGame(4)}>NORMAL</button>
                    <button onClick={() => setPegsInGame(5)}>HARD</button>
                </>
            }
            {reset && pegsInGame
                &&
                <button onClick={() => handleClick()}>New Game</button>
            }
        </div>
    )
}
export default Reset