import { useEffect, useState } from "react"
import { mastermind } from "../service"

const Buttons = ({ setAttempt, attempt, solution, setAttempts, setChecks }) => {
    const [clicks, setClicks] = useState(0)

    useEffect(() => {
        if (clicks === 5) {
            setChecks(pv => [...pv, mastermind(attempt, solution)])
            setClicks(0)
            setAttempt([])
        }
    }, [setClicks, setAttempt, attempt, clicks, solution, setChecks])

    const handleClick = (number) => {
        if (clicks <= 5) {
            setClicks(pv => pv + 1)
            setAttempt(pv => [...pv, number])
            setAttempts(pv => [...pv, number])

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

export default Buttons