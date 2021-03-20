import styled from 'styled-components'

export const StyledSolution = styled.div`
    .solution-pegs{
        display:flex;
        justify-content: center;
        margin-bottom: 10px;
    }
    .solution-peg {
        width: 60px;
        height: 60px;
        margin: 5px
    }

    @media screen and (max-width: 680px){
    .solution-peg {
        width: 50px;
        height: 50px;
        margin: 3px
    }
    }
    @media screen and (max-width: 520px){
    .solution-peg {
        width: 40px;
        height: 40px;
        margin: 3px
    }
    }
    @media screen and (max-width: 420px){
    .solution-peg {
        width: 30px;
        height: 30px;
        margin: 3px;
    }
    }

    @media screen and (max-width: 320px){
    .solution-peg {
        width: 30px;
        height: 30px;
        margin: 3px;
    }
    }

`