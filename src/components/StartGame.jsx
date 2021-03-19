import { randomNumber } from "../service"
import { StyledStartGame } from "./styled/StylelStartGame"

const StartGame = ({ setSolution, setPegs, setStart, startStopwatch, pegsInGame, setPegsInGame }) => {

    const handleClick = () => {
        let solutionPegsArr = []
        for (let i = 0; i < pegsInGame; i++) {
            solutionPegsArr.push(randomNumber(pegsInGame + 1))
        }
        setSolution(solutionPegsArr)
        setPegs([])
        setStart(false)
        startStopwatch()
    }
    return (
        <StyledStartGame>
            <img className="logo" src="https://res.cloudinary.com/dpj7zvqzs/image/upload/v1616159039/logo_xkhhjn.png" alt="" />
            <div className="levels">
                {pegsInGame ?
                    <button className='start' onClick={() => handleClick()}>START</button>
                    :
                    <>
                        <button onClick={() => setPegsInGame(3)}>EASY</button>
                        <button onClick={() => setPegsInGame(4)}>NORMAL</button>
                        <button onClick={() => setPegsInGame(5)}>HARD</button>
                    </>
                }
            </div>
        </StyledStartGame>

    )
}
export default StartGame