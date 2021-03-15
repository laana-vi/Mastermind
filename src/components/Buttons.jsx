import { useEffect, useState } from "react"
import { mastermind } from "../service"

const Buttons = ({ setAttempt, attempt, solution }) => {
    const [clicks, setClicks] = useState(0)
    let buttons = [1, 2, 3, 4, 5]

    useEffect(() => {
        if (clicks === 5) {
            console.log(mastermind(attempt, solution))
            console.log(attempt)
            console.log(solution)
            setClicks(0)
            setAttempt([])
        }
    }, [setClicks, setAttempt, attempt, clicks, solution])

    const handleClick = (number) => {
        if (clicks <= 5) {
            setClicks(pv => pv + 1)
            setAttempt(pv => [...pv, number])

        }
    }
    return (
        <div>
            {buttons.map(number => <button onClick={() => { handleClick(number) }} key={number}>{number}</button>)}
        </div>
    )
}

export default Buttons