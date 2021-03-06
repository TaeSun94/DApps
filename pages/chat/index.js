
import React, { useEffect, useRef, useState } from 'react';
import Styled from './chatStyle';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Messages from '../../components/Messages';
import io from 'socket.io-client';
import Modal from '../../components/Modal';
import ItemList from '../../components/ItemList';
import { contextMenu, Menu, Item } from 'react-contexify';
import web3 from 'web3';
const contract = require('../../contract/artifacts/MessageNFT.json');
const contractAddress = "0x9C8714E01C64d0ebB5F70C72DDb61AF971aa6F31";

const socket = io.connect("http://localhost:3002");
const menuId = "NFT List"
export default function Chat({}){
    const router = useRouter();
    const [userAddress, setUserAddress] = useState(router.query.address);
    const [userId, setUserId] = useState(userAddress.slice(0,6)+"..."+userAddress.slice(userAddress.length-4,userAddress.length));
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [mintData, setMintData] = useState([]);
    const handleModalShow = () => setIsModal(true);
    const handleModalClose = () => setIsModal(false);
    const [myContract,setMyContract] = useState();
    const [myNFT,setMyNFT] = useState([]);
    const [isCallNFT, setIsCallNFT] = useState(false);
    
    //NFT List Modal
    const [isNFTListModal, setIsNFTListModal] = useState(false);
    const handleNFTListModalShow = () => setIsNFTListModal(true);
    const handleNFTListModalClose = () => setIsNFTListModal(false);


    //채팅 시작 전 socket server와 연동하기 위한 hook 한번만 실행
    useEffect(()=>{
        socket.emit("init",{name: userAddress});
        socket.emit("join",{roomName:"All", userName:userId});
        var Web3 = new web3(window.ethereum);
        setMyContract(new Web3.eth.Contract(contract.abi,contractAddress));
    },[]);

    async function setNFT(){
        myContract.methods.totalSupply().call({from: contractAddress}, (err,res)=>{
            console.log("total: "+res);
            getOwner(res);
        })
        setIsCallNFT(true);
    }

    async function getOwner(total){
        for(let i = 0; i < total; i++){
            console.log(i);
            myContract.methods.ownerOf(i).call({from:contractAddress},(err,res)=>{
                console.log("ownerOf: "+res+"  ---   "+userAddress)
                if(res !== undefined && res.localeCompare(userAddress)>=0){
                    pushList(i);
                }
            });
        }
    }

    async function pushList(i){
        myContract.methods.tokenURI(i).call({from:contractAddress},(err, res)=>{
            console.log("tokenURI: "+res);
            if(res.length>0){
                console.log(res);
                var data = JSON.parse(res);
                console.log(data);
                setMyNFT(myNFT =>[...myNFT, data.data]);
                // myNFT.push(data.data);
            }
        })
    }

    //Account의 address가 길어 이를 15글자로 표현.
    useEffect(()=>{
        setUserId(userAddress.slice(0,6)+"..."+userAddress.slice(userAddress.length-4,userAddress.length))
    },[userAddress]);
    
    //account의 변경을 통해 address를 바꿔주기 위한 hook
    useEffect(()=>{
        ethereum.on('accountsChanged', (accounts)=>{
            if(accounts.length>0)
                setUserAddress(accounts[0]);
            else
                setUserAddress("");
        })
    },[]);
    
    useEffect(()=>{
        socket.on("onReceive",(msg)=>{
            setMessages(messages => [...messages, {message: msg, type: 1}]);
        });

        socket.on("onConnect",(msg)=>{
            setMessages(messages=>[...messages,{message: msg, type: 0}]);
        });
        
        socket.on("onDisconnect",(msg)=>{
            setMessages(messages=>[...messages,{message: msg, type: 0}]);
        });
    },[]);

    const sendMessage = () => {
        socket.emit("onSend",{message: message,user:userId, originAddress:userAddress});
        setMessage("");
    }
    const disConnect = () => {
        socket.emit('disConnect',{userName: userId});
        router.push('/');
    }
    //minting 관련 Modal 생성
    const handler = (data) => {
        const item = {
            message: data.message,
            user: userId,
            owner: data.user,
            originAddress: data.originAddress,
            userAddress: userAddress
        }
        setMintData(item);
        handleModalShow();
    };

    const handlerRight = e => {
        e.preventDefault();
        contextMenu.show({
            id: menuId,
            event: e,
        })
    }

    //민팅시 추가하는 로직을 처리해야하는데 Tx의 Pending상태의 NFT는 가져올 수 없으므로...
    const handleNFTList = (tx) => {
        // setMyNFT([]);
        // setIsCallNFT(false);
        console.log(tx);
        var Web3 = new web3(window.ethereum);
        Web3.eth.getTransaction(tx, (error,res)=>{
            // console.log(res);
            if(res !== null){
                setMyNFT([]);
                setIsCallNFT(false);
            }
        })
    }

    const handleSelect = (data) => {
        setMessage(data);
    }
    const handleNFT = () => {
        setMyNFT([]);
        setNFT;
    }
    return (
        <Styled.Container>
            <Head>
                <title>Chat App using NextJS</title>
                <meta name="description" content="Generated by create next app, " />
            </Head>
            <Styled.Main>
                <Styled.Head>
                    <p> User : {userId}</p>
                    <Styled.Btn onClick={disConnect}>Disconnect</Styled.Btn>
                </Styled.Head>
                <Styled.Log>
                {/* 중간 채팅 구간 */}
                <Messages handlerMessage={handler} messages={messages} userInfo={{
                    userId: userId,
                    userAddress: userAddress
                }}/>
                </Styled.Log>
                
                <Modal visible={isModal} onClose={handleModalClose} closable info={mintData}/>
                <Styled.Input>
                    <img className='btnImg' src='plusBtn.png' onClick={handlerRight}/>                    
                    <input className='inputBox' value={message} onChange={({target:{value}})=>{setMessage(value)}} onKeyPress={(e)=>{
                        if(e.key === 'Enter'){
                            sendMessage();
                        }
                    }}/>
                    <button className='submitBtn' onClick={sendMessage} disabled={message.length===0}>입력하기</button>
                </Styled.Input>
                {
                    !isCallNFT ?
                    <Menu id={menuId}>
                        <Item onClick={setNFT}>
                            NFT가져오기
                        </Item>
                    </Menu>
                    :
                    <Menu id={menuId}>
                        {
                            myNFT.length > 0 ?
                            <Item onClick={handleNFTListModalShow}>
                                NFT목록
                            </Item>
                            :
                            <Item disabled>
                                발급한 NFT가 없습니다.
                            </Item>
                        }
                    </Menu>
                }
                <ItemList visible={isNFTListModal} onClose={handleNFTListModalClose} closable data={myNFT} onSelect={handleSelect} onReset={handleNFT}/>
            {/* <button onClick={showNFT}>click</button> */}
            </Styled.Main>
        </Styled.Container>
    );
}