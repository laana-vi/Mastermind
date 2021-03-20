import styled from 'styled-components'

export const StyledAttempts = styled.div`
    .attempt-pegs {
        min-width: 280px;
        min-height: 75px;
        margin-right: 30px;
        margin-bottom:5px;
    }
    .attempt-peg {
        width: 60px;
        height: 60px;
        margin: 5px
    }

    
    @media screen and (max-width: 680px){
        .attempt-peg {
        width: 50px;
        height: 50px;
        margin: 3px
    }
        .attempt-pegs {
            min-width: 244px;
            min-height: 60px;
            margin-right: 10px;
            margin-bottom:3px;
        }

    }

    @media screen and (max-width: 540px){
        .attempt-peg {
            width: 40px;
            height: 40px;
            margin: 2px
    }
        .attempt-pegs {
            min-width: 184px;
            min-height: 50px;
            margin-right: 10px;
            margin-bottom:2px;
        }

    }

    @media screen and (max-width: 420px){
        .attempt-peg {
            width: 30px;
            height: 30px;
            margin: 1px;
    }
        .attempt-pegs {
            min-width: 144px;
            min-height: 40px;
            margin-right: 10px;
            margin-bottom:1px;
        }

    }

    @media screen and (max-width: 320px){
        .attempt-peg {
            width: 25px;
            height: 25px;
            margin: 1px;
    }
        .attempt-pegs {
            min-width: 108px;
            min-height: 31px;
            margin-right: 10px;
            margin-bottom:2px;
        }

    }

    @media screen and (max-width: 290px){
        .attempt-peg {
            width: 25px;
            height: 25px;
            margin: 1px;
    }
        .attempt-pegs {
            min-width: 108px;
            min-height: 31px;
            margin-right: 2px;
            margin-bottom:1px;
        }

    }

`