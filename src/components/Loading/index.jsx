import loader from '../../assets/loader.gif'
import { Container } from './style'

function Loading() {
    return (
        <Container>
            <img src={loader} alt="loader" />
        </Container>
    )
}

export default Loading