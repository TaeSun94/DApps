import Styled from 'styled-components';

const Container = Styled.a`
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

export default {Container};