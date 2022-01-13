
import styled from "styled-components";
const Div = styled.div`
nav.react-contextmenu {
    position: fixed;
    width: 200px;
    left: 0;
    top: calc(100% + 10px);
    border-radius: 4px;
    background-color: #fff;
    padding: 10px 0;
    z-index: 99;
    box-shadow: 0 0 20px rgba(0,0,0,.2);
}
.react-contextmenu .react-contextmenu-item:hover{
  background: #cccccc;
}

.react-contextmenu-item:hover:not(.react-contextmenu-item--disabled) {
  background-color: #f1f1f1;
}

.react-contextmenu .react-contextmenu-item{
  font-size: 14px;
  display: block;
  text-decoration: none;
  padding: 10px 15px;
  cursor: pointer;
  user-select: none;
  transition: .2s;
  position: relative;
  margin-bottom: 2px;
  font-weight: 500;
  display: flex;
  align-items: center;
  outline: none;
}
.react-contextmenu-item span{
  margin-left: 10px;
}
.react-contextmenu-item svg{
  font-size: 14px;
}
.react-contextmenu-item .copy{
  color:skyblue
}
.react-contextmenu-item .delete{
  color:red
}
.react-contextmenu-item .send{
  color: blue
}
.react-contextmenu-item .share{
  color: green
}
.react-contextmenu-item .watchlist{
  color: rebeccapurple
}
`;
const Container = styled.div`
    position:relative;
    margin: 20px;
    width:200px;
    height:50px;
    background:#333333;
    border-radius: 10px;
    color: white;
    marginTop: 0px;
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

export default { Container, Div };