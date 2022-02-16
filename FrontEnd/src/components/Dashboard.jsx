import GlobalStyles, { StldBody } from "./styles/Global";
import { MainContainer, PrimaryContainer, Heading1 } from "./styles/Dashboard";

function Dashboard() {
  return (
    <>
      <StldBody>
        <GlobalStyles />
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
