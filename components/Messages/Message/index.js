
import Styled from './messageStyle';
import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {FaRegCopy, FaList,FaEllipsisV, FaShareAlt} from 'react-icons/fa'
import {RiSendPlaneFill, RiDeleteBin6Line} from 'react-icons/ri'

const Message = ({messageItem}) => {
    const minting = (data) =>{
        console.log("click!!"+data);
    }
    return (
        <Styled.Div>
            <div style={{marginLeft:'24px',paddingBottom:'0px'}}>
                <text>User: {messageItem.user}</text>
            </div>
            <ContextMenuTrigger id="contextmenu">
                <Styled.Container>
                    <div style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
                    <p>{messageItem.message}</p>
                    </div>
                </Styled.Container>
            </ContextMenuTrigger>
            <ContextMenu id="contextmenu">
                <MenuItem onClick={minting({messagae: messageItem.messagae, user: messageItem.user})}>
                <RiSendPlaneFill className="send"/>
                <span>Minting</span>
                </MenuItem>
            </ContextMenu>
        </Styled.Div>
    )
}
export default Message;