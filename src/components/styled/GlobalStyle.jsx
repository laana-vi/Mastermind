import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    background-color:#272D2D;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Orbitron', sans-serif;
    color: #ebe8e5;
    background-color:#272D2D;
}
button:focus {
    outline: none;
}
.app {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.game {
    display: flex;
    flex-direction: column;
}
.pegs {
    display: flex;
    flex-direction: row;
}
.bg {
  position: fixed;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent ${({ win }) => win===false ?  "url('https://res.cloudinary.com/dpj7zvqzs/image/upload/v1616247955/rain_hadhx5.png')" : "url('http://assets.iceable.com/img/noise-transparent.png')"} repeat 0 0;
  background-repeat: repeat;
  animation: bg-animation .2s infinite;
  opacity: .9;
  visibility: visible;
  z-index: ${({ win}) => win===false ? '1' : '-1'};
}

@keyframes bg-animation {
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }
}

`