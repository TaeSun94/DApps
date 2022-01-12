
import styled from "styled-components";

const Container = styled.div`
    position:relative;
    margin: 20px;
    width:200px;
    height:50px;
    background:#333333;
    border-radius: 10px;
    color: white;

    &:after {
        border-top:15px solid #333333;
        border-left: 15px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 0px solid transparent;
        content:"";
        position:absolute;
        top:10px;
        left:-15px;
    }

   p {
       margin-left: 5px;
       margin-right: 5px; 
       overflow: auto;
    }
`;

export default { Container };