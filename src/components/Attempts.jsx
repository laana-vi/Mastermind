const Attempts = ({ attempts }) => {

    

    let key = 0
    return (
        <>

            <div>
                {attempts?.slice(0, 5)?.map(char => <span key={key++}>{char}</span>)}
            </div>
            <div>
                {attempts?.slice(5, 10)?.map(char => <span key={key++}>{char}</span>)}
            </div>
            <div>
                {attempts?.slice(10, 15)?.map(char => <span key={key++}>{char}</span>)}
            </div>
            <div>
                {attempts?.slice(15, 20)?.map(char => <span key={key++}>{char}</span>)}
            </div>
            <div>
                {attempts?.slice(20, 25)?.map(char => <span key={key++}>{char}</span>)}
            </div>
            <div>
                {attempts?.slice(25, 30)?.map(char => <span key={key++}>{char}</span>)}
            </div>
            <div>
                {attempts?.slice(30, 35)?.map(char => <span key={key++}>{char}</span>)}
            </div>
            <div>
                {attempts?.slice(35, 40)?.map(char => <span key={key++}>{char}</span>)}
            </div>
        </>
    )
}

export default Attempts