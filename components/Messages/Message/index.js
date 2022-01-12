
import Styled from './messageStyle';
const Message = ({message}) => {
    return (
        <Styled.Container>
            <div style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
            <p>{message}</p>
            </div>
        </Styled.Container>
    )
}
export default Message;