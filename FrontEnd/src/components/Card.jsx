import { useState } from "react";
import {StldCard, Title, Icon, StldContent, Text, ReadMore} from "./styles/Card"

function Card(props) {

    const LongText = ({ content,limit}) => {
        const [showAll, setShowAll] = useState(false);
      
        const showMore = () => setShowAll(true);
        const showLess = () => setShowAll(false);
      
        if (content.length <= limit) {
          return <div>{content}</div>
        }
        if (showAll) {
          return <div> 
            {content} 
            <ReadMore onClick={showLess}>Read less</ReadMore> 
          </div>
        }
        const toShow = content.substring(0, limit) + "...";
        return <div> 
          {toShow} 
          <ReadMore onClick={showMore}>Read more</ReadMore>
        </div>
      }

    return (
    <StldCard>
        <Title>
        <h2>{props.name}</h2>
        </Title>
        <StldContent>
        <Text>
            <LongText content={props.content} limit={180} />
        </Text>
        </StldContent>
    </StldCard>
    );
}

export default Card;