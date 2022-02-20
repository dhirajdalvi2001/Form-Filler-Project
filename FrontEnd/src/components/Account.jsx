import GlobalStyles, { StldBody } from "./styles/Global";
import { MainContainer, PrimaryContainer, Heading1 } from "./styles/Account";

function Account() {
  return (
    <>
      <StldBody>
        <GlobalStyles />
        <MainContainer>
          <PrimaryContainer>
            <Heading1>Account</Heading1>
          </PrimaryContainer>
        </MainContainer>
      </StldBody>
    </>
  );
}

export default Account;
