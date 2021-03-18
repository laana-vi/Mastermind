import { randomNumber } from "../service"

const StartGame = ({ start, setSolution, setPegs, setStart, startStopwatch, pegsInGame, setPegsInGame }) => {

    const handleClick = () => {
        let solutionPegsArr = []
        for (let i = 0; i < pegsInGame; i++) {
            solutionPegsArr.push(randomNumber(pegsInGame+1))
        }
        setSolution(solutionPegsArr)
        setPegs([])
        setStart(false)
        startStopwatch()
    }
    return (
        <div>
            <button onClick={() => setPegsInGame(3)}>EASY</button>
            <button onClick={() => setPegsInGame(4)}>NORMAL</button>
            <button onClick={() => setPegsInGame(5)}>HARD</button>
            {pegsInGame && <button onClick={() => handleClick()}>Start New Game</button>}
        </div>
    )
}
export default StartGame