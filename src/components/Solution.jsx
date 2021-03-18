
const Solution = ({solutionPegs}) => {
    let key = 0

    return(
        <div>
            {solutionPegs.map(peg => <img src={peg} key={key++} alt="" />)}
        </div>
    )
}
export default Solution