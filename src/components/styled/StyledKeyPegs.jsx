import styled from 'styled-components'

export const StyledKeyPegs = styled.div`
    .key-pegs{
        min-width: 280px;
        min-height: 75px;
        margin-left: 30px;
        margin-bottom:5px;
    }
    .key-peg {
        width: 60px;
        height: 60px;
        margin: 5px
    }

    @media screen and (max-width: 680px){
    .key-peg {
        width: 50px;
        height: 50px;
        margin: 3px
    }
    .key-pegs{
        min-width: 244px;
        min-height: 60px;
        margin-left: 10px;
        margin-bottom:3px;
    }

    }
    @media screen and (max-width: 540px){
    .key-peg {
        width: 40px;
        height: 40px;
        margin: 2x
    }
    .key-pegs{
        min-width: 184px;
        min-height: 50px;
        margin-left: 10px;
        margin-bottom:2px;
    }

    }

    @media screen and (max-width: 420px){
    .key-peg {
        width: 30px;
        height: 30px;
        margin: 1px;
    }
    .key-pegs{
        min-width: 144px;
        min-height: 40px;
        margin-left: 10px;
        margin-bottom:1px;
    }

    }

    @media screen and (max-width: 320px){
    .key-peg {
        width: 25px;
        height: 25px;
        margin: 1px;
    }
    .key-pegs{
        min-width: 108px;
        min-height: 31px;
        margin-left: 10px;
        margin-bottom:2px;

    }
    }
    @media screen and (max-width: 290px){
    .key-peg {
        width: 25px;
        height: 25px;
        margin: 1px;
    }
    .key-pegs{
        min-width: 108px;
        min-height: 31px;
        margin-left: 2px;
        margin-bottom:1px;

    }
    }

`