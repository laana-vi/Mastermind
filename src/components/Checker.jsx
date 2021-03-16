import { checkers } from "../variables/checkers"


const Checker = ({ checks }) => {
    let key = 0
    const renderExact = (number) => {
        let exactPics = []
        for (let i = 1; i <= number; i++) {
            exactPics.push(checkers.exact)
        }
        return exactPics
    }

    const renderWrongPlace = (number) => {
        let wrongPlacePics = []
        for (let i = 1; i <= number; i++) {
            wrongPlacePics.push(checkers.wrongPlace)
        }
        return wrongPlacePics
    }

    return (
        <>
        {console.log(checks)}
            <div>
                {renderExact(checks[0]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(checks[0]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(checks[1]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(checks[1]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(checks[2]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(checks[2]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(checks[3]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(checks[3]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(checks[4]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(checks[4]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(checks[5]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(checks[5]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(checks[6]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(checks[6]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
            <div>
                {renderExact(checks[7]?.exact).map(pic => <img src={pic} alt="" key={key++} />)}
                {renderWrongPlace(checks[7]?.wrongPlace).map(pic => <img src={pic} alt="" key={key++} />)}
            </div>
        </>
    )
}
export default Checker