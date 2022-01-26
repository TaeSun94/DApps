import Styled from './textCardStyle';
import React, { useState } from 'react';
const TextCard = ({isSelect, data, select, key}) => {
    const [useSelect, setUseSelect] = useState(isSelect);
    const use = () =>{
        setUseSelect(!useSelect);
    }
    return (
        <Styled.Container 
        onClick={()=>{
            use();
            select(key);
        }} isSelect={useSelect}>
            {data}
        </Styled.Container>
    )
}

export default TextCard;