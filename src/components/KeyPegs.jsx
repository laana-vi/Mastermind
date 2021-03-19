import { keyPegs } from "../variables/keyPegs"
import { StyledKeyPegs } from "./styled/StyledKeyPegs"

const KeyPegs = ({ allSolutionChecks, attempts }) => {
    let key = 0

    const renderExact = (number) => {
        let exactPics = []
        for (let i = 1; i <= number; i++) {
            exactPics.push(keyPegs.exact)
        }
        return exactPics
    }

    const renderWrongPlace = (number) => {
        let wrongPlacePics = []
        for (let i = 1; i <= number; i++) {
            wrongPlacePics.push(keyPegs.wrongPlace)
        }
        return wrongPlacePics
    }

    const showKeyPegs = () => {
        let attemptsArr = []
        for (let i = 0; i < attempts; i++) {
            attemptsArr.push(i)
        }
        return attemptsArr.map(attempt =>
            <div className="key-pegs" key={attempt}>
                {renderExact(allSolutionChecks[attempt]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(allSolutionChecks[attempt]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>)
    }

    return (
        <>
            <StyledKeyPegs>
                {showKeyPegs()}
            </StyledKeyPegs>

        </>
    )
}
export default KeyPegs