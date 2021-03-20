import styled from 'styled-components'

export const StyledCodePegs = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 15px;

    .code-peg-button{
        background: transparent;
        border:none;
        display: inline-block;
        transform: translateZ(0);
        transition-duration: 0.3s;
        transition-property: transform;
    }
    .code-peg-button:hover{
        transform: scale(1.1);
    }
    .code-peg {
        width: 60px;
        height: 60px;
        margin: 5px
    }
    @media screen and (max-width: 680px){
    .code-peg {
        width: 50px;
        height: 50px;
        margin: 3px
    }
    }
    @media screen and (max-width: 520px){
    .code-peg {
        width: 40px;
        height: 40px;
        margin: 3px
    }
    }

    @media screen and (max-width: 420px){
    .code-peg {
        width: 30px;
        height: 30px;
        margin: 3px;
    }
    }

    @media screen and (max-width: 320px){
    .code-peg {
        width: 30px;
        height: 30px;
        margin: 3px;
    }
    }
`