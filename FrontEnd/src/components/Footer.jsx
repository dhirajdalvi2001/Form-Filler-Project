import { FaGithubSquare, FaLinkedin, FaTwitter } from "react-icons/Fa";
import GlobalStyles from "./styles/Global";
import { Container, StldFooter } from "./styles/StldFooter";

function Footer() {
  return (
    <>
      <GlobalStyles />
      <StldFooter>
        <Container>
          <h5>
            <FaGithubSquare /> /Saurabh
          </h5>
          <h5>
            <FaLinkedin /> /Saurabh
          </h5>
          <h5>
            <FaTwitter /> /Saurabh
          </h5>
        </Container>
        <Container>
          <h5>
            <FaGithubSquare /> /Parikshit
          </h5>
          <h5>
            <FaLinkedin /> /Parikshit
          </h5>
          <h5>
            <FaTwitter /> /Parikshit
          </h5>
        </Container>
        <Container>
          <h5>
            <FaGithubSquare /> /Dhiraj
          </h5>
          <h5>
            <FaLinkedin /> /Dhiraj
          </h5>
          <h5>
            <FaTwitter /> /Dhiraj
          </h5>
        </Container>
      </StldFooter>
    </>
  );
}

export default Footer;
