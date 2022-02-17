import { Link } from "react-router-dom";
import styled from "styled-components";

export const StldNav = styled.div `
border: 0;
border-style: hidden hidden solid hidden;
width: 100%;    
height: 40px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
background-image: url("https://www.transparenttextures.com/patterns/black-paper.png");
background-color: rgba(0, 0, 0, 0.7);
color: rgb(251, 248, 241, 0.8);
`

export const StldLogo = styled.div `
    padding:  0 40px;
    color: rgb(251, 248, 241, 0.6);
    transition: all 0.6s;

    &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.75);
    }
`

export const MobileIcon = styled.div `
display: none;

@media screen and (max-width:900px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 20px;
    cursor: pointer;
}
`

export const NavMenu = styled.ul `
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width:900px){
display: flex;
flex-direction: column;
width: 80%;
height: 90vh;
font-size: 24px;
position: absolute;
top: 40px;
left: ${({ click }) => (click ? 0 : "-100%")};
opacity: 0.95;
transition: all 0.5s ease;
background-color: rgba(50, 50, 50, 1);
}
`

export const NavItems = styled.div `
display: flex;
height: 100%;

@media screen and (max-width:900px){
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 100%;

}
`

export const NavLink = styled(Link)
`
    display: flex;
    padding:  10px 20px;
    font-weight: 700;
    text-decoration: none;
    color: rgb(251, 248, 241, 0.6);
    // background-color: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    transition: all 0.6s;

    &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.75);
    transition: all 0.3s ease;
    }

    @media screen and (max-width:900px){
        margin: auto;
        text-align: center;
        width: 10%;
        display: table;
        padding: 10px 40px;
        background-color: rgba(0, 0, 0, 0.3);
        }

`