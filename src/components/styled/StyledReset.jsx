import styled from 'styled-components'

export const StyledReset = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10 !important;

    .reset-button {
        font-family: 'Orbitron', sans-serif;
        font-weight: bolder;
        letter-spacing: 0.5em;
        font-size: 1em;
        background-color: #3ba484;
        padding: 10px 30px 10px 30px;
        color: #272D2D;
        margin: 10px 10px 0 10px;
        border-radius: 10px;
        border: none;
        display: inline-block;
        transform: translateZ(0);
        transition-duration: 0.3s;
        transition-property: transform;
    }
    .reset-button:hover {
    transform: scale(1.1)
}

@media screen and (max-width: 680px){
    .reset-button {
        font-size: 0.8em;
    }
}

@media screen and (max-width: 420px){
    .reset-button {
        font-size: 0.6em;
    }
}
`