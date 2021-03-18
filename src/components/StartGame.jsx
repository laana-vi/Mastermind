import { randomNumber } from "../service"

const StartGame = ({ start, setSolution, setPegs, setStart, startStopwatch }) => {

    const handleClick = () => {
        setSolution([randomNumber(5), randomNumber(5), randomNumber(5), randomNumber(5)])
        setPegs([])
        setStart(false)
        startStopwatch()
    }
    return (
        <div>
            {start && <button onClick={() => handleClick()}>Start New Game</button>}
        </div>
    )
}
export default StartGame