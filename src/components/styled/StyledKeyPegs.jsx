import styled from 'styled-components'

export const StyledKeyPegs = styled.div`
align-self: flex-end;
    .key-pegs{
        min-width: ${({ pegsInGame }) => pegsInGame===3 ? '210px' : (pegsInGame===4 ? '280px' : '350px')};
        min-height: 75px;
        margin-left: 30px;
        margin-bottom:1px;
        
    }
    .key-peg {
        width: 60px;
        height: 60px;
        margin: 5px
    }

    @media screen and (max-width: 760px){
    .key-peg {
        width: 50px;
        height: 50px;
        margin: 3px
    }
    .key-pegs{
        min-width: 244px;
        min-height: 60px;
        margin-left: 10px;
        margin-bottom:2px;
    }

    }
    @media screen and (max-width: 590px){
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

    @media screen and (max-width: 490px){
    .key-peg {
        width: 30px;
        height: 30px;
        margin: 1px;
    }
    .key-pegs{
        min-width: 144px;
        min-height: 40px;
        margin-left: 10px;
        margin-bottom:2px;
    }

    }

    @media screen and (max-width: 340px){
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
        margin-bottom:2px;

    }
    }

`