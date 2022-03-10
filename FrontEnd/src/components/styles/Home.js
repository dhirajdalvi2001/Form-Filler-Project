import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentContainer = styled.div `
margin: auto;
width: 600px;

@media screen and (max-width: 700px) and (min-width: 550px) {
width: 80%;
}

@media screen and (max-width: 550px) and (min-width: 200px) {
margin: 50% auto;
width: 88%;
}
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

@media screen and (max-width: 700px) and (min-width: 550px) {
font-size: 26px;
line-height: 36px;
}

@media screen and (max-width: 550px) and (min-width: 250px) {
width: 100%;
}
`

export const Buttons = styled.div `
margin: auto;
width: 60%;
height: 100px;
display: flex;
flex-wrap: wrap;

@media screen and (max-width: 700px) and (min-width: 550px) {
width: 100%;
}

@media screen and (max-width: 550px) and (min-width: 250px) {
width: 100%;
}
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
background-color: rgba(0, 0, 0, 0.2);
color: rgba(0, 0, 0, 0.5);
outline: none;
transition: all 0.4s;

&:hover {
    cursor: pointer;
    letter-spacing: 5px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 0.65);    
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.75);
}

@media screen and (max-width: 700px) and (min-width: 550px) {
width: 80%;
}

@media screen and (max-width: 550px) and (min-width: 250px) {
width: 80%;
}
`
export const StldLink = styled(Link)
`
margin: auto;
width: 50%;
display: flex;

@media screen and (max-width: 700px) and (min-width: 550px) {
    width: 50%;
    }
    
    @media screen and (max-width: 550px) and (min-width: 250px) {
    width: 50%;
    }
`