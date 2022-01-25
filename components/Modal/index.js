import React, { useEffect, useState } from "react";
import styled from "styled-components";
import web3 from "web3";
import meta from '../../util/metadata';
const contract = require('../../contract/artifacts/MessageNFT.json');
const contractAddress = "0x9C8714E01C64d0ebB5F70C72DDb61AF971aa6F31"

const Modal = ({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  info
}) => {
  const [myContract, setMyContract] = useState();
  useEffect(()=>{
    var Web3 = new web3(window.ethereum);
    setMyContract(new Web3.eth.Contract(contract.abi,contractAddress));
  },[]);

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
  return () => {
    const scrollY = document.body.style.top
    document.body.style.cssText = `position: ""; top: "";`
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
}, []);

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  const close = (e) => {
    if (onClose) {
      onClose(e)
    }
  }

  async function mintNFT(tokenInfo){
    const tx = {
      from: info.userAddress,
      to: contractAddress,
      gas: `300000`,
      data: myContract.methods.safeMint(info.userAddress, JSON.stringify(tokenInfo)).encodeABI(),
    }
    console.log(tx.data)
    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx],
    });
    console.log(txHash);
    close();
  }

  const mint = (e) =>{
    var data = meta.makeMeta(info.message);
    mintNFT(data);
  }
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          <Title>
              Token Info
          </Title>
          <Info>
            <div style={{flexDirection:'row'}}>
              <h3>
                Owner
              </h3>
              <text>{info.owner}</text>
            </div>
            <div style={{flexDirection:'row'}}>
              <h3>
                Publisher
              </h3>
              <text>{info.user}</text>
            </div>
          </Info>
          <Contents>
            <div style={{flexDirection:'row'}}>
              <h3>
                Data
              </h3>
              <text>{info.message}</text>
            </div>
          </Contents>
          <Footer>
            <Btn onClick={mint}>Mint</Btn>
            <Btn onClick={close}>Cancel</Btn>
          </Footer>
        </ModalInner>
      </ModalWrapper>
    </>
    )
  };

  const Btn = styled.button`
    font-size: 18px;
    font-weight: bold;
    background-color: white;
    border: 0px;
  `;
  
  const Footer = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
  `;

  const Contents = styled.div`
  
  `;

  const Info = styled.div`
    display: flex;
   justify-content: space-between;
  `;

  const Title = styled.h1`
    margin-top: 0;

  `;
  
  const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`
  export default Modal;