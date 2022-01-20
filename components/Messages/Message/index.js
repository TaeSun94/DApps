
import Styled from './messageStyle';
import React, { useEffect, useState } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {FaRegCopy, FaList,FaEllipsisV, FaShareAlt} from 'react-icons/fa'
import {RiSendPlaneFill, RiDeleteBin6Line} from 'react-icons/ri'
import { contextMenu, Item, Menu, useContextMenu } from 'react-contexify';
import "react-contexify/dist/ReactContexify.min.css";
const menuId = "RightClickMenu";

const Message = ({messageItem,own, mint}) => {
    // const {show} = useContextMenu({id: menuId});

    const handleRight = e => {
        e.preventDefault();
        contextMenu.show({
            id: menuId,
            event: e,
        })
        // mint(messageItem);
    }

    const handlerCheck = () =>{
        mint(messageItem);
    } 

    return (
        <Styled.Div>
            <div style={{marginLeft:'24px',paddingBottom:'0px'}}>
                <text>User: {messageItem.user}</text>
            </div>
            {
                own ?
                <Styled.OwnContainer onContextMenu={handleRight}>
                    <div style={{display:'flex', justifyContent:'center', flexDirection:'row', }}>
                    <p>{messageItem.message}</p>
                    </div>
                </Styled.OwnContainer>
                :
                <Styled.Container onContextMenu={handleRight}>
                    <div style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
                    <p>{messageItem.message}</p>
                    </div>
                </Styled.Container>
            }
            <Menu id={menuId}>
                <Item onClick={handlerCheck}>
                    mint
                </Item>
            </Menu>
        </Styled.Div>
    )
}
export default Message;