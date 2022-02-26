import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div `
width: 100vw;
height: 90.7vh;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

@media screen and (max-width: 600px) {
    margin: auto;
    height: 100vh;
    min-height: 400px;
}
`

export const PrimaryContainer = styled.div `
width: 36vw;
min-width: 520px;
height: 40vw;
min-height: 520px;
display: flex;
background-color: rgba(0, 0, 0, 0.4);;
flex-direction: column;
justify-content: center;
align-items: center;
border: 0;
border-radius: 2vh;
box-shadow: 0 0 50px rgb(255, 255, 255, 0.5);

@media screen and (max-width: 600px) {
    margin: 20px;
    flex-wrap: wrap;    
    width: 80vw;
    min-width: 280px;
    height: 80vw;
    min-height: 500px;
    box-shadow: 0 0 50px rgb(255, 255, 255, 0.5);
}
`

export const SecondaryContainer = styled.div `
width: 100%;
height: 80%;

@media screen and (max-width: 600px) {
    font-size: 9vw;
    }
`

export const Heading = styled.div `
width: 100%;
height: 10vw;
min-height: 26%;
text-align: center;
color: rgb(251, 248, 241, 0.8);
/* background-color: rgba(0, 0, 0, 0.5); */

@media screen and (max-width: 600px) {
    height: 20vw;
    min-height: 80px;
    /* background-color: rgba(0, 0, 0, 0.5); */
    }

h1 {
    margin: 0 auto;
    font-size: 3.8rem;

    @media screen and (max-width: 600px) {
    font-size: 9vw;
    }
}

h2 {
    margin: 2vw auto 0;
    font-size: 1.8rem;

    @media screen and (max-width: 600px) {
    margin: 2vw auto;
    font-size: 4vw;
    }
}
`

export const Form1 = styled.div `
width: 100%;
height: 26vw;
min-height: 70%;
margin: auto;
/* background-color: rgba(0, 0, 0, 0.5); */

h5 {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    color: #ccc;
    flex-wrap: wrap;
    
    @media screen and (max-width: 600px) {
    font-size: 2.8vw;
    }
}

h6 {
    margin: auto;
    width: 268px;
    height: 0;
    font-size: 0.7rem;
    text-align: right;
    color: rgba(210, 41, 44, 0.9);

    @media screen and (max-width: 600px) {
    font-size: 2.4vw;
    }
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
    width: 18vw;
    min-width: 260px;
    height: 3vw;
    min-height: 46px;
    border: 0;
    border-radius: 8px;
    text-indent: 25px;
    outline: none;
    background-color: rgba(240, 240, 240, 0.3);
}

input::placeholder {
    font-size: 1rem;
    font-weight: 700;
    color: rgb(0, 0, 0, 0.5);
}

button {
    margin: 20px auto 20px;
    width: 18vw;
    min-width: 260px;
    height: 3vw;
    min-height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    border: 0;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 0.75);
    outline: none;
    transition: all 0.6s;
}

button:hover {
    letter-spacing: 8px;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 12px rgb(255, 255, 255, 0.2);
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
    color: rgba(201, 155, 251, 0.8);
    transition: all 0.6s;

    &:hover {
    color: rgba(255, 255, 255, 0.75);
    }
`