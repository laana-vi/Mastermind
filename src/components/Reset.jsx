import { StyledReset } from "./styled/StyledReset"

const Reset = ({ reset }) => {

    const handleClick = () => {
        window.location.reload()
    }
    return (
        <StyledReset>
            <div>
                {reset && <button className='reset-button' onClick={() => handleClick()}>NEW GAME</button>}
            </div>
        </StyledReset>

    )
}
export default Reset