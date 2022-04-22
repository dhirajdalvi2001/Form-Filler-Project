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

export const Heading3 = styled.h3 `
margin: 20vh auto;
width: fit-content;
display: flex;
font-size: 60px;
text-align: center;
text-transform: uppercase;
color: rgba(230, 230, 230, 0.6);
`

export const FormsBox = styled.div`
width: 100%;
height: 50%;
display: flex;
justify-content: space-between;
align-items: center;
`

export const ContentBox = styled.div`
width: 100%;
min-height: fit-content;
height: 2150px;
max-height: max-content;
display: flex;

@media screen and (max-width: 1100px) and (min-width: 600px) {
    flex-direction: column-reverse;
}

@media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
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
height: 100%;
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
    margin: 0 auto 20px;
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
height: 100%;
max-height: max-content;
border-radius: 12px;
background-color: rgba(0, 0, 0, 0.1);

@media screen and (max-width: 1100px) and (min-width: 600px) {
    width: 100%;
    height: auto;
}

@media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
}
`

export const InputContainer = styled.div`
width: 100%;
height: auto;
display: flex;
`

export const PDFMenu = styled.div`
width: 100%;
height: 30px;
display: flex;
background-color: rgba(0, 0, 0, 0.1);
justify-content: center;
align-items: center;
border-radius: 12px;
`

export const ChangePage = styled.div`
cursor: pointer;
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
font-size: 36px;
color: rgba(255, 255, 255, 0.5);
border-radius: 12px;
transition: 0.6s all;

&:hover {
    background-color: rgba(0, 0, 0, 0.75);
    color: rgba(255, 255, 255, 1);
}
`

export const DownloadButton = styled.button`
cursor: pointer;
margin: 20px auto;
/* min-width: 350px; */
width: 200px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border: 0;
border-radius: 12px;
color: rgba(255, 255, 255, 0.4);
background-color: rgba(0, 0, 0, 0.15);
font-size: 18px;
font-weight: 700;
text-transform: uppercase;
transition: 0.6s all;

&:hover {
    background-color: rgba(0, 0, 0, 0.75);
    color: rgba(255, 255, 255, 0.8);
}
`