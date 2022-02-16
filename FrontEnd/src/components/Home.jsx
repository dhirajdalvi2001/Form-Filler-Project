import Footer from "../components/Footer";
import GlobalStyles, { StldBody } from "./styles/Global";
import {
  BgDesktop,
  Heading1,
  ImgContainer,
  HomeButton,
  Buttons,
  ContentContainer,
  StldLink,
} from "./styles/StldHome";

function Home() {
  return (
    <>
      <StldBody>
        <GlobalStyles />
        <ImgContainer>
          <BgDesktop />
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
        </ImgContainer>
      </StldBody>
      <Footer />
    </>
  );
}

export default Home;
