import GlobalStyles, { StldBody } from "./styles/Global";
import { MainContainer, PrimaryContainer, Heading1, SecondaryContainer } from "./styles/Dashboard";
import { loginContext } from "./App";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import DashboardInputs from "./DashboardInputs";

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
            <Heading1>
              Dashboard
              <h3>
                Note :- Fill the details and the data will be saved in our database so you don't have to fill these everytime
              </h3>
              </Heading1>
            <SecondaryContainer>
              <DashboardInputs />
            </SecondaryContainer>
          </PrimaryContainer>
        </MainContainer>
      </StldBody>
    </>
  );
}

export default Dashboard;
