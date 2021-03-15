import { useState } from "react"
import { mastermind } from "../service"

const Buttons = ({ setAttempt, attempt, solution }) => {
    const [clicks, setClicks] = useState(1)

    const handleClick = (number) => {
        if (clicks <= 5) {
            setClicks(pv => pv + 1)
            setAttempt(pv => [...pv, number])
            console.log(clicks)
        }
        if (clicks === 5) {
            setAttempt(pv => [...pv, number])
            setTimeout(() => {
                console.log(mastermind(attempt, solution))
                console.log(attempt)
                console.log(solution)
                setClicks(0)
                setAttempt([])
            }, 1000);

        }
    }
    return (
        <div>
            <button onClick={() => {
                handleClick(1)
            }}>1</button>
            <button onClick={() => {
                handleClick(2)
            }}>2</button>
            <button onClick={() => {
                handleClick(3)
            }}>3</button>
            <button onClick={() => {
                handleClick(4)
            }}>4</button>
            <button onClick={() => {
                handleClick(5)
            }}>5</button>
        </div>
    )
}

export default Buttons