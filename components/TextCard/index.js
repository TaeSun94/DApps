import Styled from './textCardStyle';

const TextCard = ({...props}) => {

    return (
        <Styled.Container>
            <h3>
                {props.data}
            </h3>
        </Styled.Container>
    )
}

export default TextCard;