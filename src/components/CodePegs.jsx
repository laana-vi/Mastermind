import { useEffect, useState } from "react"
import { mastermind } from "../service"
import { codePegs } from "../variables/codePegs"

const CodePegs = ({ setAttempt, attempt, solution, setAllSolutionChecks, setPegs, setCurrentAttempts, setSolutionCheck, pegsInGame }) => {
    const [clicks, setClicks] = useState(0)


    useEffect(() => {
        if (clicks === pegsInGame) {
            setAllSolutionChecks(pv => [...pv, mastermind(attempt, solution)])
            setSolutionCheck(mastermind(attempt, solution))
            setClicks(0)
            setAttempt([])
            setCurrentAttempts(pv => pv + 1)
        }
    }, [setClicks, setAttempt, attempt, clicks, solution, setAllSolutionChecks, setCurrentAttempts, setSolutionCheck, pegsInGame])

    const handleClick = (number) => {
        if (clicks <= pegsInGame) {
            setClicks(pv => pv + 1)
            setAttempt(pv => [...pv, number])
            setPegs(pv => [...pv, codePegs[number]])

        }
    }
    const renderPegs = () => {
        let visiblePegs = []
        for (let i = 1; i <= pegsInGame + 1; i++) {
            visiblePegs.push(i)
        }
        return visiblePegs.map(visiblePeg => <button key={visiblePeg} onClick={() => { handleClick(visiblePeg) }}><img src={codePegs[visiblePeg]} alt="" /></button>
        )
    }
    return (
        <div>
            {renderPegs()}
        </div>
    )
}

export default CodePegs