import styled from "styled-components";

export const StldFooter = styled.div `
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  background-color: #330033;
`;

export const Container = styled.div `
  width: 80px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    font-size: 12px;
    line-height: 30px;
    color: rgb(251, 248, 241, 0.6);
    display: flex;
    align-items: center;
    font-weight: 700;
    transition: 0.25s;
  }

  h5:hover {
    cursor: pointer;
    color: rgb(255, 255, 255);
  }
`;