const Attempts = ({ pics }) => {
    let key=0
    return (
        <>

            <div>
                {pics?.slice(0, 5)?.map(pic  => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(5, 10)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(10, 15)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(15, 20)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(20, 25)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(25, 30)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(30, 35)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
            <div>
                {pics?.slice(35, 40)?.map(pic => <img key={key++} src={pic} alt="" />)}
            </div>
        </>
    )
}

export default Attempts