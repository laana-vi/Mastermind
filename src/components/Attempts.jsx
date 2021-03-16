const Attempts = ({ pics }) => {
    let key=0
    return (
        <>

            <div>
                {pics?.slice(0, 4)?.map(pic  => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(4, 8)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(8, 12)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(12, 16)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(16, 20)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(20, 24)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(24, 28)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(28, 32)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
        </>
    )
}

export default Attempts