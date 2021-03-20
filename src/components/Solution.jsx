import { StyledSolution } from "./styled/StyledSolution"

const Solution = ({ solutionPegs }) => {
    let key = 0

    return (
        <StyledSolution>
            <div className='solution-pegs'>
                {solutionPegs.map(peg => <img className='solution-peg' src={peg} key={key++} alt="" />)}
            </div>
        </StyledSolution>

    )
}
export default Solution