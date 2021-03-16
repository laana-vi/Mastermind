import { useEffect, useState } from "react"
import { codePegs } from "../variables/codePegs"

const Solution = ({solution, currentAttempt, solutionCheck}) => {
    let key = 0
    const [solutionPegs, setSolutionPegs] = useState([])

    useEffect(() => {
        if(currentAttempt===8 || solutionCheck.exact === 4){
            setSolutionPegs([codePegs[solution[0]], codePegs[solution[1]], codePegs[solution[2]], codePegs[solution[3]] ])
        }
    }, [currentAttempt, solution, solutionCheck])
    return(
        <div>
            {solutionPegs.map(peg => <img src={peg} key={key++} alt="" />)}
        </div>
    )
}
export default Solution