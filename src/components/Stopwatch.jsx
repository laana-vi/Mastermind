import { StyledStopwatch } from "./styled/StyledStopwatch"

const StopWatch = ({ time }) => {
    return (
        <StyledStopwatch>
            <div>
                <span>{(time.h >= 10) ? time.h : `0${time.h}`}:</span>
                <span>{(time.m >= 10) ? time.m : `0${time.m}`}:</span>
                <span>{(time.s >= 10) ? time.s : `0${time.s}`}</span>
            </div>
        </StyledStopwatch>

    )
}
export default StopWatch