
import React from 'react';
import Modal from '../../components/Modal';
import Styled from './chatStyle';


export default function(){
    const [isLoad, setIsLoad] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    //TO-DO
    //page를 Link로 이동할 때 props내에 account를 보내줄 수 있다면 첫 실행 단계에서의 마운트작업이 필요
    //React.useEffect(()=>{});
    React.useEffect(()=>{
        console.log("set")
    },[isLoad]);
    return(
        <div>
        {
            !isLoad ?
            <>
                <button onClick={()=> setShowModal(true)}>Open Modal</button>;
                <Modal onClose={()=> setShowModal(false)} show={showModal}> Connect M</Modal>
            </>
            :
            <>
            </>
        }
        </div>
    )
}