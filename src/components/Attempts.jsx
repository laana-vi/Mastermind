import { useEffect, useState } from "react"
import { StyledAttempts } from "./styled/StyledAttempts"

const Attempts = ({ pegs, attempts, pegsInGame }) => {
    const [sliceStarts, setSliceStart] = useState([])
    let key = 0

    useEffect(() => {
        let attemptsArr = []
        for (let i = 0; i <= attempts * pegsInGame - pegsInGame; i = i + pegsInGame) {
            attemptsArr.push(i)
        }
        setSliceStart(attemptsArr)
    }, [setSliceStart, attempts, pegsInGame])

    const showAttempts = () => {
        return sliceStarts.map(slice =>
            <div className="attempt-pegs" key={slice}>
                {pegs?.slice(slice, slice + pegsInGame)?.map(pic => <img className="attempt-peg" key={key++} src={pic} alt="" />)}
            </div>)
    }

    return (
        <>
            <StyledAttempts>
                {showAttempts()}
            </StyledAttempts>

        </>
    )
}

export default Attempts