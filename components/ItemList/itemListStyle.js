import styled from "styled-components";

const Overlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
`;

const Wrapper = styled.div`
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
`;

const Inner = styled.div`
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
`;

const Title = styled.h1`
    margin-top: 0;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Contents = styled.div`
    max-height: 450px;
    overflow: auto;
`;

const Btn = styled.button`
    margin-top: 10px;
`;

const Footer = styled.div`

`;

const Container = styled.a`
display: flex;
margin: 1rem;
padding: 1.5rem;
text-align: center;
color: ${(props) => (props.isSelect ? '#0070f3' : 'inherit')};
text-decoration: none;
border: 1px solid #eaeaea;
border-radius: 10px;
transition: color 0.15s ease, border-color 0.15s ease;
max-width: 280px;
min-width: 150px;
max-height: 150px;
min-height: 100px;
align-items: center;
font-weight: bold;
font-size: large;
border-color: ${(props) => (props.isSelect ? '#0070f3' : 'balck')};
cursor: pointer;
// &:hover,
// &:focus,
// &:active {
//     color: #0070f3;
//     border-color: #0070f3;
// }

h2 {
    // margin: 0 0 1rem 0;
    font-size: 1.5rem;
}
`;

export default { Overlay, Wrapper, Inner, Title, Info, Contents, Btn, Footer, Container };