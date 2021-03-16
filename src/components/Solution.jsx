import { useEffect, useState } from "react"
import { buttons } from "../variables/buttons"

const Solution = ({solution, attempts, check}) => {
    let key = 0
    const [solutionPics, setSolutionPics] = useState([])

    useEffect(() => {
        if(attempts===8 || check.exact === 4){
            setSolutionPics([buttons[solution[0]], buttons[solution[1]], buttons[solution[2]], buttons[solution[3]] ])
        }
    }, [attempts, solution, check])
    return(
        <div>
            {solutionPics.map(pic => <img src={pic} key={key++} alt="" />)}
        </div>
    )
}
export default Solution