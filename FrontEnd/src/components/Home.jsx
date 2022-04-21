import Footer from "../components/Footer";
import GlobalStyles, { StldBody } from "./styles/Global";
import {
  Heading1,
  HomeButton,
  Buttons,
  ContentContainer,
  StldLink,
} from "./styles/Home";

function Home() {
  return (
    <>
      <StldBody>
        <ContentContainer>
          <Heading1>
            Why fill form manually, when you can just get it done in a click
          </Heading1>
          <Buttons>
            <StldLink to="/Login">
              <HomeButton>LOGIN</HomeButton>
            </StldLink>
            <StldLink to="/Sign-up">
              <HomeButton>REGISTER</HomeButton>
            </StldLink>
          </Buttons>
        </ContentContainer>
      </StldBody>
      <Footer />
    </>
  );
}

export default Home;
