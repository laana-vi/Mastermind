const Checker = ({ checks }) => {
    let key = 0
    return (
        <>
            {checks?.map(check => <p key={key++}>Exact: {check?.exact} Wrong place: {check?.wrongPlace}</p>)}
        </>
    )
}
export default Checker