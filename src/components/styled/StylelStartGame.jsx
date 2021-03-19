import styled from 'styled-components'

export const StyledStartGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
.levels {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 30px 0px #000000;
    padding: 50px 100px 50px 100px;
    border-radius: 10px;

}
.levels button {
    font-family: 'Orbitron', sans-serif;
    font-weight: bolder;
    letter-spacing: 0.5em;
    font-size: 1.2em;
    background-color: #ebe8e5;
    padding: 20px 50px 20px 50px;
    color: #272D2D;
    margin: 20px;
    border-radius: 10px;
    border: none;
    display: inline-block;
    transform: translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
}
.levels button:hover {
    transform: scale(1.1)

}
.start{
    background-color: #3ba484 !important;
}
.levels button:nth-child(1){
    background-color: #ce1584;
}
.levels button:nth-child(2){
    background-color: #ec6a21;
  
}
.levels button:nth-child(3){
    background-color: #d9d721;
    
}

.logo {
    margin-top: 10px;
    width: 600px;
    margin-top: 10px;
}
@media screen and (max-width: 620px){
    .logo{
        width: 400px;
    }
    .levels{
        padding: 20px 50px 20px 50px;
    }
    .levels button {
        font-size:1em;
        padding: 10px 30px 10px 30px;
        margin: 20px;
    }
}
@media screen and (max-width: 420px){
    .logo{
        width: 300px;
    }
    .levels{
        padding: 20px 40px 20px 40px;
    }
    .levels button {
        font-size:1em;
        padding: 10px 20px 10px 20px;
        margin: 20px;
    }
}
@media screen and (max-width: 310px){
    .logo{
        width: 250px;
    }
    .levels{
        padding: 20px 30px 20px 30px;
    }
    .levels button {
        font-size:1em;
        padding: 10px 20px 10px 20px;
        margin: 20px;
    }
}

`