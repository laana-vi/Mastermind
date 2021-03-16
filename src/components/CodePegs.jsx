import { useEffect, useState } from "react"
import { mastermind } from "../service"
import { codePegs } from "../variables/codePegs"

const CodePegs = ({ setAttempt, attempt, solution, setAllSolutionChecks, setPegs, setCurrentAttempts, setSolutionCheck }) => {
    const [clicks, setClicks] = useState(0)


    useEffect(() => {
        if (clicks === 4) {
            setAllSolutionChecks(pv => [...pv, mastermind(attempt, solution)])
            setSolutionCheck(mastermind(attempt, solution))
            setClicks(0)
            setAttempt([])
            setCurrentAttempts(pv => pv + 1)
        }
    }, [setClicks, setAttempt, attempt, clicks, solution, setAllSolutionChecks, setCurrentAttempts, setSolutionCheck])

    const handleClick = (number) => {
        if (clicks <= 4) {
            setClicks(pv => pv + 1)
            setAttempt(pv => [...pv, number])
            setPegs(pv => [...pv, codePegs[number]])

        }
    }
    return (
        <div>
            <button onClick={() => { handleClick(1) }}><img src='https://res.cloudinary.com/dpj7zvqzs/image/upload/v1615857543/purple_jfe2ov.png' alt="" /></button>
            <button onClick={() => { handleClick(2) }}><img src='https://res.cloudinary.com/dpj7zvqzs/image/upload/v1615857543/pink_h52z9n.png' alt="" /></button>
            <button onClick={() => { handleClick(3) }}><img src='https://res.cloudinary.com/dpj7zvqzs/image/upload/v1615857543/green_uv7agj.png' alt="" /></button>
            <button onClick={() => { handleClick(4) }}><img src='https://res.cloudinary.com/dpj7zvqzs/image/upload/v1615857543/blue_hkvrpv.png' alt="" /></button>
            <button onClick={() => { handleClick(5) }}><img src='https://res.cloudinary.com/dpj7zvqzs/image/upload/v1615857543/yellow_nqtkb0.png' alt="" /></button>
        </div>
    )
}

export default CodePegs