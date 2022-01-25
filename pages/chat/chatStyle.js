
import styled from 'styled-components';

const Container = styled.div`
    margin: 60px;
    overflow:auto;
`;

const Main = styled.div`
    min-height: 100vh;
    padding: 4rem 0;
    flex-direction: column;
    align-items: center;
    min-width: 400px;
    overflow: auto
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
    .btnImg{
      width: 30px;
      height: 30px
    }
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

const Slider = styled.div`
.slider {
    width: 300px;
    text-align: center;
    overflow: hidden;
  }
  
  .slides {
    display: flex;
  
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  
    /*
    scroll-snap-points-x: repeat(300px);
    scroll-snap-type: mandatory;
    */
  }
  .slides::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .slides::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
  }
  .slides::-webkit-scrollbar-track {
    background: transparent;
  }
  .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 300px;
    height: 300px;
    margin-right: 50px;
    border-radius: 10px;
    background: #eee;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
  
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
  .slides > div:target {
    /*   transform: scale(0.8); */
  }
  .author-info {
    background: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 0.75rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
  }
  .author-info a {
    color: white;
  }
  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .slider > a {
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    background: white;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 0 0.5rem 0;
    position: relative;
  }
  .slider > a:active {
    top: 1px;
  }
  .slider > a:focus {
    background: #000;
  }
  
  /* Don't need button navigation */
  @supports (scroll-snap-type) {
    .slider > a {
      display: block;
    }
  }
`;

export default {Container, Main, Log, Input, Head, Btn, Slider};