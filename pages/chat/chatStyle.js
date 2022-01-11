
import styled from 'styled-components';

const Container = styled.div`
    margin: 60px;
    flex-direction: 'colunm';
`;

const Main = styled.div`
    min-height: 100vh;
    padding: 4rem 0;
    flex-direction: column;
    align-items: center;
`;

const Head = styled.div`
    
`;

const Log = styled.div`
    display: block;
    width: 100%;
    overflow: auto;
    height: 600px;
    border: solid;
    padding: 5px;
    border-radius: '15%';
`;

const Input = styled.div`
    margin-top: 20px;
    width: 100%;
    min-height: 30px;
    border: solid;
    flex-direction: row;
    alignItems:'center';
    justifyContent:'center';
    .inputBox {
        background-color: red;
        width:90%;
        height:100%;
    }
    .submitBtn{
        backgroundColor: white;
    }
`;
export default {Container, Main, Log, Input, Head};