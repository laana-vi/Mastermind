import styled from 'styled-components'

export const StyledCodePegs = styled.div`
    display:flex;
    justify-content: center;

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
`