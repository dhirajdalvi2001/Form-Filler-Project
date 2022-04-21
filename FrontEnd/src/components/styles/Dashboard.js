import styled from "styled-components";

export const MainContainer = styled.div `
margin: auto;
width: 90%;
height: auto;
display: flex;
`

export const Heading1 = styled.h1 `
font-size: 40px;
text-align: center;
text-transform: uppercase;
color: rgba(230, 230, 230, 0.6);

h3 {
    margin: auto;
    width: 80%;
    font-size: 12px;
    text-transform: none;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.4);

    @media screen and (max-width: 1100px) and (min-width: 600px) {
        font-size: 12px;
    }

    @media screen and (max-width: 600px) and (min-width: 250px) {
        width: 100%;
        font-size: 12px;
    }
}
`

export const PrimaryContainer = styled.div `
margin: 20px auto;
width: 90%;
height: 10%;
`

export const SecondaryContainer = styled.div`
width: 100%;
min-height: 90%;
height: auto;
`


export const InputMain = styled.div`
width: 100%;
height: fit-content;

@media screen and (max-width: 1100px) and (min-width: 600px) {
    width: 100%;
}

form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1100px) and (min-width: 600px) {
    flex-wrap: wrap;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }

    .heading2 {
        margin: 18px auto 4px;
        width: 96%;
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.5);
    }

    .heading3 {
        margin: auto;
        width: 30%;
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.5);
    }

    .inputField, select {
        margin: 4px auto;
        padding: 12px;
        width: 60%;
        font-size: 12px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        border: 0;
        resize: vertical;
        outline: none;
    }

    .inputField::placeholder {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.75);
    }

    option {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.75);
    }

    select {
        color: rgba(0, 0, 0, 0.75);
    }
}

`
export const Inputs = styled.div`
margin: 0 auto;
width: 30%;
height: fit-content;

@media screen and (max-width: 1100px) and (min-width: 600px) {
    width: 50%;
}

@media screen and (max-width: 600px) and (min-width: 250px) {
    min-width: 280px;
    width: 100%;
}
`