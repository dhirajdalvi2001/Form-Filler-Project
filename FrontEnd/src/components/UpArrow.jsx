import { StldUpArrow } from './styles/UpArrow';
import { IoIosArrowDropupCircle } from "react-icons/io"
import * as Scroll from "react-scroll";

function UpArrow() {
  const styledIcon = {
    height: "100%",
    width: "100%",
    color: "rgba(0, 0, 0, 0.5)",
    cursor: "pointer",
  }
  function scrollUp () {
    window.scrollTo(0, 0)
  }
  return (
    <StldUpArrow onClick={scrollUp}>
      <IoIosArrowDropupCircle style={styledIcon}/>
    </StldUpArrow>
  )
}

export default UpArrow;