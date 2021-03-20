import styled from 'styled-components'

export const StyledStopwatch = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
    font-family: 'Fjalla One', sans-serif;
    font-size: 2em;
    letter-spacing: 0.5em;
    padding: 10px;
    border-bottom: 2px solid white;

    @media screen and (max-width: 680px){
        font-size: 1.6em;
    }

    @media screen and (max-width: 520px){
        font-size: 1.3em;

    }

    @media screen and (max-width: 420px){
        font-size: 1.1em;

    }


`