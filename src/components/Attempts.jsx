import { useEffect, useState } from "react"

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
            <div key={slice}>
                {pegs?.slice(slice, slice + pegsInGame)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>)
    }

    return (
        <>
            {showAttempts()}
        </>
    )
}

export default Attempts