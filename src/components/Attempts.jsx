const Attempts = ({ pegs }) => {
    let key = 0
    return (
        <>
            <div>
                {pegs?.slice(0, 4)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pegs?.slice(4, 8)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pegs?.slice(8, 12)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pegs?.slice(12, 16)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pegs?.slice(16, 20)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pegs?.slice(20, 24)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pegs?.slice(24, 28)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pegs?.slice(28, 32)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
        </>
    )
}

export default Attempts