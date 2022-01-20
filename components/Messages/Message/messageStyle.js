
import styled from "styled-components";

const Div = styled.div`
  
`;
const Container = styled.div`
    position:relative;
    margin: 20px;
    min-width:200px;
    max-width: 500px;
    height:50px;
    background:#333333;
    border-radius: 10px;
    color: white;
    marginTop: 0px;
    overflow: auto;
    &:after {
        border-top:15px solid #333333;
        border-left: 15px solid #333333;
        border-right: 0px solid transparent;
        border-bottom: 0px solid transparent;
        content:"";
        position:absolute;
        top:10px;
        left:-15px;
    }
    p{
      margin-left: 5px;
      margin-right: 5px; 
    }
`;
const OwnContainer = styled.div`
    position:relative;
    margin: 20px;
    min-width:200px;
    max-width: 500px;
    height:50px;
    background:#666666;
    border-radius: 10px;
    color: white;
    marginTop: 0px;
    overflow: auto;
    &:after {
        border-top:15px solid #666666;
        border-left: 0px solid transparent;
        border-right: 15px solid #666666;
        border-bottom: 0px solid transparent;
        content:"";
        position:absolute;
        top:10px;
        right: -15px;
    }
    p{
      margin-left: 5px;
      margin-right: 5px; 
    }
`;
export default { Container, Div, OwnContainer };