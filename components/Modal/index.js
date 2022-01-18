import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Modal = ({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  title,
  children,
  info
}) => {
  const [owner, setOwner] = useState("");
  useEffect(()=>{
    setOwner(info.originAddress.slice(0,6)+"..."+info.originAddress.slice(info.originAddress.length-4,info.originAddress.length));
    console.log(1)
  });
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
  return (
    <>
      {/* <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {closable && <button className="modal-close" onClick={close} />}
          {children}
        </ModalInner>
      </ModalWrapper> */}
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
              <text>{owner}</text>
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
            <Btn>Mint</Btn><Btn onClick={onClose}>Cancel</Btn>
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