
import React from 'react';
import Message from './Message';

const Messages = ({...props}) => {
    const[userId, setUserId] = React.useState(props.userInfo.userId);
    const[userAddress, setUserAddress] = React.useState(props.userInfo.userAddress);
    const handleMint = (messageItem) => {
        props.handlerMessage(messageItem);
    }
    return(
        <div>
        {
            props.messages.map((msg, idx)=> (
                <div key={idx}>
                    {
                        msg.type === 0 ?
                        <div style={{textAlign:'center',marginTop:'5px',marginBottom:'5px'}}>
                            <text>{msg.message}</text>
                        </div>
                        :
                        <Message messageItem={msg.message} own={msg.message.user === userId ? true: false} mint={handleMint}/>
                    }
                </div>
            ))
        }
        </div>
    )
}

export default Messages;