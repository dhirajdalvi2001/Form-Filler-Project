import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        width: 100%;
        height: max-content;
        background-image: url(src/images/bg-texture.svg);
        background-size: auto;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
`;

export const StldBody = styled.div `
    min-height: 600px;
    max-height: fit-content;
    display: flex;
    flex-wrap: wrap;
`

export default GlobalStyles;