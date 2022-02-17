import styled from "styled-components";
import { Link } from "react-router-dom";
import bgdesktop from "../../images/bg-desktop.jpg"

export const ImgContainer = styled.div `
width: 100vw;
height: 100%;
display: flex;
`

export const ContentContainer = styled.div `
margin: 150px auto;
width: 40%;

@media screen and (max-width: 700px) and (min-width: 500px) {
width: 60%;
}

@media screen and (max-width: 500px) and (min-width: 200px) {
width: 80%;
}
`

export const BgDesktop = styled.img.attrs({
    src: `${bgdesktop}`
})
`
width: 100%;
height: auto;
position: absolute;
opacity: 1;   
z-index: -5;
`

export const Heading1 = styled.h1 `
position: relative;
z-index: 1;
color: rgba(0, 0, 0, 0.5);
font-size: 30px;
font-family: 'Rowdies', cursive;
font-weight: 300;
letter-spacing: 2px;
line-height: 40px;

@media screen and (max-width: 900px) {
font-size: 20px;
line-height: 20px;
}
`

export const Buttons = styled.div `
height: 100px;
display: flex;
flex-wrap: wrap;
`

export const HomeButton = styled.button `
margin: auto;
width: 160px;
height: 46px;
font-size: 12px;
font-weight: 700;
letter-spacing: 3px;
border: 0;
border-radius: 8px;
background-color: rgba(243,242,90,255);
color: rgba(0, 0, 0, 0.5);
outline: none;
transition: all 0.6s;

&:hover {
    cursor: pointer;
    letter-spacing: 5px;
    color: rgba(0, 0, 0, 0.85);
    background-color: rgba(255, 254, 52, 1);    
    box-shadow: 0 0 10px 1px rgba(247, 246, 140, 1);
}

@media screen and (max-width: 900px) {
width: 100px;
line-height: 20px;
}
`
export const StldLink = styled(Link)
`
margin: auto;
`