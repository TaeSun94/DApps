
import React, { useEffect, useRef, useState } from 'react';
import Modal from '../../components/Modal';
import Styled from './chatStyle';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Messages from '../../components/Messages';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3002");

export default function Chat({}){
    const router = useRouter();
    const [userAddress, setUserAddress] = useState(router.query.address);
    const [userId, setUserId] = useState(userAddress.slice(0,6)+"..."+userAddress.slice(userAddress.length-4,userAddress.length));
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    //채팅 시작 전 socket server와 연동하기 위한 hook 한번만 실행
    useEffect(()=>{
        socket.emit("init",{name: userAddress});
        socket.emit("join",{roomName:"All", userName:userId})
    },[]);

    //Account의 address가 길어 이를 15글자로 표현.
    useEffect(()=>{
        setUserId(userAddress.slice(0,6)+"..."+userAddress.slice(userAddress.length-4,userAddress.length))
    },[userAddress]);

    //account의 변경을 통해 address를 바꿔주기 위한 hook
    useEffect(()=>{
        ethereum.on('accountsChanged', (accounts)=>{
            console.log(accounts);
            if(accounts.length>0)
                setUserAddress(accounts[0]);
            else
                setUserAddress("");
        })
    },[]);
    
    useEffect(()=>{
        socket.on("onReceive",(msg)=>{
            console.log(msg);
            setMessages(messages => [...messages, {message: msg, type: 1}]);
        });

        socket.on("onConnect",(msg)=>{
            setMessages(messages=>[...messages,{message: msg, type: 0}]);
        });
        
        socket.on("onDisconnect",(msg)=>{
            setMessages(messages=>[...messages,{message: msg, type: 0}]);
        })
    },[])

    const sendMessage = () => {
        socket.emit("onSend",{message: message,user:userId});
        setMessage("");
    }

    const disConnect = () => {
        socket.emit('disConnect',{userName: userId});
        router.push('/');
    }
    const handler = ({data}) => {
        console.log(data)
    };
    return (
        <Styled.Container>
            <Head>
                <title>Chat App using NextJS</title>
                <meta name="description" content="Generated by create next app, " />
            </Head>
            <Styled.Main>
                <Styled.Head>
                    <p style={{alignContents: 'center'}}> User : {userId}</p>
                    <button onClick={disConnect}>Disconnect</button>
                </Styled.Head>
                <Styled.Log>
                {/* 중간 채팅 구간 */}
                <Messages handlerMessage={handler} messages={messages}/>
                </Styled.Log>
                <Styled.Input>
                        <input className='inputBox' value={message} onChange={({target:{value}})=>{setMessage(value)}} />
                        <button className='submitBtn' style={{alignItems:'center',justifyContent:'center'}}
                        onClick={sendMessage} disabled={message.length===0}
                        >입력하기</button>
                </Styled.Input>
            </Styled.Main>
        </Styled.Container>
    );
}