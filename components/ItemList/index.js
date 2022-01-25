import Styled from './itemListStyle';
import React, {useEffect,useState} from 'react';
import TextCard from '../TextCard';

const ItemList = ({
    className,
    onClose,
    maskClosable,
    closable,
    visible,
    title,
    data
}) => {
    console.log("ItemList: "+ data);
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

    return(
        <>
            <Styled.Overlay visible={visible}/>
            <Styled.Wrapper visible={visible}>
                <Styled.Inner>
                    <Styled.Title>
                        NFT List
                    </Styled.Title>
                    <Styled.Contents>
                    {
                        data.map((msg,idx)=>(
                            <TextCard key={idx} data={msg} />
                        ))
                    }
                    </Styled.Contents>
                    <Styled.Footer>
                        <Styled.Btn onClick={close}>Close</Styled.Btn>
                    </Styled.Footer>
                </Styled.Inner>
            </Styled.Wrapper>
        </>
    )
}

export default ItemList;