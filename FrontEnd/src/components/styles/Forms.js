import styled from "styled-components";

export const MainContainer = styled.div `
margin: auto;
width: 90%;
height: fit-content;
max-height: max-content;
display: flex;

@media screen and (max-width: 600px) {
    width: 90%;
}
`

export const PrimaryContainer = styled.div `
margin: 20px auto;
width: 100%;
height: 10%;
`

export const Heading1 = styled.h1 `
width: 100%;
font-size: 40px;
text-align: center;
text-transform: uppercase;
color: rgba(230, 230, 230, 0.6);
`

export const ContentBox = styled.div`
width: 100%;
height: fit-content;
max-height: max-content;
display: flex;

@media screen and (max-width: 1100px) and (min-width: 600px) {
    flex-direction: column-reverse;
}

@media screen and (max-width: 600px) {
    flex-direction: column-reverse;
}
`

export const InputMain = styled.div`
width: 100%;
height: fit-content;
display: flex;
flex-wrap: wrap;

@media screen and (max-width: 1100px) and (min-width: 600px) {
    width: 100%;
}
`

export const Inputs = styled.div`
width: 100%;
height: fit-content;

@media screen and (max-width: 1100px) and (min-width: 600px) {
    width: 50%;
}
`

export const InputField = styled.div`
min-width: 300px;
width: 30%;
height: fit-content;
max-height: max-content;
border-radius: 8px;
background-color: rgba(0, 0, 0, 0.1);

@media screen and (max-width: 1100px) and (min-width: 600px) {
    width: 100%;
}

@media screen and (max-width: 600px) {
    min-width: 200px;
    width: 100%;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;

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

export const FormField = styled.div`
width: 70%;
height: auto;
max-height: max-content;
border-radius: 12px;
background-color: rgba(0, 0, 0, 0.1);

@media screen and (max-width: 1100px) and (min-width: 600px) {
    width: 100%;
    height: auto;
}

@media screen and (max-width: 600px) {
    width: 100%;
    height: 100vh;
}
`

export const InputContainer = styled.div`
width: 100%;
height: auto;
display: flex;
`

export const ChangePage = styled.div`
width: 100%;
height: 40px;
background-color: rgba(0, 0, 0, 0.1);
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
color: rgba(255, 255, 255, 0.5);
`