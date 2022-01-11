import Link from 'next/link';
import Styled from './cardStyle';
const Card = ({...props}) => {
    
    return (
        <Link 
            href={{
                pathname: `${props.link}`,
                query: {address: `${props.address}`}
            }}
        >
            <Styled.Container>
                <h2>{props.title} &rarr;</h2>
                <p>{props.description}</p>
            </Styled.Container>
        </Link>
    )
}

export default Card;