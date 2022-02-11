import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div `
width: 100vw;
height: 90.7vh;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`

export const PrimaryContainer = styled.div `
width: 450px;
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 0;
border-radius: 12px;
box-shadow: 0 0 50px rgb(251, 248, 241, 0.35);

@media screen and (max-width: 600px) {
    flex-wrap: wrap;
    width: 325px;
}
`

export const SecondaryContainer = styled.div `
width: 100%;
height: max-content;
`

export const Heading = styled.div `
width: 100%;
height: 20%;
text-align: center;
color: rgb(251, 248, 241, 0.8);

h1 {
    margin: 0 auto;
    font-size: 44px;
    @media screen and (max-width: 600px) {
    font-size: 30px;
}

}

h2 {
    margin: 10px auto 0;
    font-size: 16px;
}
`

export const Form1 = styled.div `
width: 100%;
height: max-content;
margin: 40px auto;

h5 {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    text-align: center;
    color: #ccc;
    flex-wrap: wrap;
}

h6 {
    margin: auto;
    width: 260px;
    height: 0;
    font-size: 10px;
    text-align: right;
    color: rgba(210, 41, 44, 0.9);
}

.inputError {
    border: 2px solid;
    border-color: rgba(210, 41, 44, 0.9);
}

.inputError::placeholder{
    color: rgba(210, 41, 44, 0.85);
}

input {
    display: flex;
    margin: 25px auto 0;
    width: 260px;
    height: 46px;
    border: 0;
    border-radius: 8px;
    text-indent: 25px;
    outline: none;
}

input::placeholder {
    font-size: 12px;
    font-weight: 700;
    color: rgb(0, 0, 0, 0.5);
}

button {
    margin: 20px auto 20px;
    width: 260px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    border: 0;
    border-radius: 8px;
    background-color: rgb(112, 34, 183, 1);
    color: rgba(255, 255, 255, 0.75);
    outline: none;
    transition: all 0.6s;
}

button:hover {
    letter-spacing: 12px;
    background-color: rgba(151, 45, 251, 1);
}

@media screen and (max-width: 600px) {
    margin: 10px auto;

    input {
    margin: 15px auto 0;
}
}

`

export const StldLink = styled(Link)
`
    color: rgba(151, 45, 251, 1);
    transition: all 0.6s;

    &:hover {
    color: rgba(255, 255, 255, 0.75);
    }
`