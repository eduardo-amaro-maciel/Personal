import { Container } from "./style"

function Input(props) {

    return (
        <Container>
            <label htmlFor={props.id}>{props.title}</label>
            <input {...props} />
        </Container>
    )
}

export default Input