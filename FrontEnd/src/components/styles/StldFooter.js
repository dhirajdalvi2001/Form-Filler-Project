import styled from "styled-components";

export const StldFooter = styled.div `
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-evenly;
  background-image: url("https://www.transparenttextures.com/patterns/black-paper.png");
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Container = styled.div `
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  h3 {
    font-size: 16px;
    line-height: 30px;
    color: rgb(251, 248, 241, 0.6);
    display: flex;
    align-items: center;
    font-weight: 700;
  }

  h3:hover {
    cursor: pointer;
    color: rgb(255, 255, 255);
  }

  h5 {
    font-size: 12px;
    line-height: 30px;
    color: rgb(251, 248, 241, 0.6);
    font-weight: 700;
    transition: 0.25s;
  }

  h5:hover {
    cursor: pointer;
    color: rgb(255, 255, 255);
  }
`;