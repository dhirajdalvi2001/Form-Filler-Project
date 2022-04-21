import styled from "styled-components";

export const StldCard = styled.div`
margin: 2vw;
position: relative;
background-color: rgba(0, 0, 0, 0.2);
min-width: 260px;
width: 22vw;
min-height: 320px;
height: fit-content;
max-height: max-content;
border-radius: 12px;
box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
text-align: left;
overflow: hidden;

&:hover {
    cursor: pointer;
}

@media screen and (max-width: 710px) {
    margin: 20px;
    min-width: 320px;
    width: 60%;
}
`

export const Title = styled.div`
min-height: 46px;
height: 4vw;
width: 100%;
background-color: rgba(0, 0, 0, 0.1);
display: flex;
justify-content: center;
align-items: center;

h2 {
font-size: 2em;
color: rgba(255, 255, 255, 0.5);
display: flex;
flex: 1;
justify-content: center;
align-items: center;
}
`

export const StldContent = styled.div`
display: flex;
flex-wrap: wrap;
color: rgba(255, 255, 255, 0.5);
font-size: 0.9rem;
line-height: 1.26rem;
`

export const Text = styled.div`
margin: 5%;
`

export const Icon = styled.div`
margin: 2%;
border-radius: 50%;
border: 1px solid rgba(255, 255, 255, 0.5);
width: 48px;
height: 48px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`

export const ReadMore = styled.div`
cursor: pointer;
text-align: right;
font-weight: 500;
font-size: 0.8rem;
z-index: 1;
`
