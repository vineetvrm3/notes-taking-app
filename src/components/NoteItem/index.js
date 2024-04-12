import { ListContainer,FooterContainer} from "./styledComponents"
import parse from 'html-react-parser';
import { RiDeleteBin5Line } from "react-icons/ri";

const NoteItem = (props) => {
const {item} = props
const {title,content,dateTime,backgroundColor} = item
return(
    <ListContainer color={backgroundColor}>
        <h1>{title}</h1>
        <div>
            {parse(content)}
        </div>
        <FooterContainer>
            <p>{dateTime}</p>
            <RiDeleteBin5Line/>
        </FooterContainer>
        
    </ListContainer>
)
}

export default NoteItem