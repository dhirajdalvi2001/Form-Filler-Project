import GlobalStyles, { StldBody } from "./styles/Global";
import { MainContainer, PrimaryContainer, Heading1 } from "./styles/Dashboard";
import { loginContext } from "./App";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

function Dashboard() {

  let logInValue = useContext(loginContext);
  let navigateTo = useNavigate();

  useEffect(() => {
    if (!logInValue.login) {
      navigateTo("/login");
    }
  })

  return (
    <>
      <StldBody>
        <MainContainer>
          <PrimaryContainer>
            <Heading1>Dashboard</Heading1>
          </PrimaryContainer>
        </MainContainer>
      </StldBody>
    </>
  );
}

export default Dashboard;
