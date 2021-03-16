import { randomNumber } from "../service"

const Reset = ({ reset, setSolution, setAllSolutionChecks, setCurrentAttempts, setSolutionCheck, setPegs, setReset, setSolutionPegs, startStopwatch }) => {

    const handleClick = () => {
        setSolution([randomNumber(5), randomNumber(5), randomNumber(5), randomNumber(5)])
        setAllSolutionChecks([])
        setCurrentAttempts(0)
        setSolutionCheck({})
        setPegs([])
        setReset(false)
        setSolutionPegs([])
        startStopwatch()
    }
    return (
        <div>
            {reset && <button onClick={() => handleClick()}>New Game</button>}
        </div>
    )
}
export default Reset