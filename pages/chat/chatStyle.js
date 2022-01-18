
import styled from 'styled-components';

const Container = styled.div`
    margin: 60px;
`;

const Main = styled.div`
    min-height: 100vh;
    padding: 4rem 0;
    flex-direction: column;
    align-items: center;
    min-width: 400px;
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
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
    display: flex;
    margin-top: 20px;
    min-height: 30px;
    flex-direction: row;
    align-items:'center';
    justify-content: space-between;

    .inputBox{
        width:80%;
    }
    .submitBtn{
        width: 15%;
    }
    @media screen and (max-width: 540px){
        .submitBtn{
            width: 19%;
        }
    }
`;

const Btn = styled.button`
    border: none;
    background-color: white;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    color: #4CAF50;
`;
export default {Container, Main, Log, Input, Head, Btn};