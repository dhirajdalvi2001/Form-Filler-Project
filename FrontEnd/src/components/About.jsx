import GlobalStyles, { StldBody } from "./styles/Global";
import {
  MainContainer,
  PrimaryContainer,
  Heading1,
  ContentBox,
} from "./styles/About";
import { about } from "./arrays/AboutPageInfo";
import Card from "./Card";
import Footer from "../components/Footer";

function About() {

  function createCard(e) {
    return <Card
    key={e.id}
    name={e.title}
    src={e.imgURL}
    content={e.content}
     />
  }
  
  return (
    <>
      <StldBody>
        <MainContainer>
          <PrimaryContainer>
            <Heading1>About</Heading1>
            <ContentBox>
              {about.map(createCard)}
            </ContentBox>
          </PrimaryContainer>
        </MainContainer>
      </StldBody>
      <Footer />
    </>
  );
}

export default About;
