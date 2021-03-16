import { useEffect } from "react"
import { codePegs } from "../variables/codePegs"

const Solution = ({solution, currentAttempt, solutionCheck, setReset, setSolutionPegs, solutionPegs, stopStopwatch}) => {
    let key = 0
    

    useEffect(() => {
        if(currentAttempt===8 || solutionCheck.exact === 4){
            setSolutionPegs([codePegs[solution[0]], codePegs[solution[1]], codePegs[solution[2]], codePegs[solution[3]] ])
            setReset(true)
            stopStopwatch()
        }
    }, [currentAttempt, solution, solutionCheck, setReset, setSolutionPegs, stopStopwatch])
    return(
        <div>
            {solutionPegs.map(peg => <img src={peg} key={key++} alt="" />)}
        </div>
    )
}
export default Solution