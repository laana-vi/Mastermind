import { keyPegs } from "../variables/keyPegs"


const KeyPegs = ({ allSolutionChecks }) => {
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

    return (
        <>
            <div>
                {renderExact(allSolutionChecks[0]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(allSolutionChecks[0]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(allSolutionChecks[1]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(allSolutionChecks[1]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(allSolutionChecks[2]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(allSolutionChecks[2]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(allSolutionChecks[3]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(allSolutionChecks[3]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(allSolutionChecks[4]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(allSolutionChecks[4]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(allSolutionChecks[5]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(allSolutionChecks[5]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(allSolutionChecks[6]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(allSolutionChecks[6]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(allSolutionChecks[7]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(allSolutionChecks[7]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
        </>
    )
}
export default KeyPegs