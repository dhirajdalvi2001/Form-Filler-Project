import GlobalStyles, { StldBody } from "./styles/Global";
import {
  MainContainer,
  PrimaryContainer,
  Heading1,
  ContentBox,
} from "./styles/About";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <StldBody>
        <GlobalStyles />
        <MainContainer>
          <PrimaryContainer>
            <Heading1>About</Heading1>
            <ContentBox></ContentBox>
          </PrimaryContainer>
        </MainContainer>
      </StldBody>
      <Footer />
    </>
  );
}

export default About;
