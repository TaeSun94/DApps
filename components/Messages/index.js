
import React from 'react';
import Message from './Message';

const Messages = ({...props}) => {
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
                        <Message messageItem={msg.message} />
                    }
                </div>
            ))
        }
        </div>
    )
}

export default Messages;