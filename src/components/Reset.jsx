
const Reset = ({ reset }) => {

    const handleClick = () => {
      window.location.reload()
    }
    return (
        <div>
            {reset  && <button onClick={() => handleClick()}>New Game</button>
            }
        </div>
    )
}
export default Reset