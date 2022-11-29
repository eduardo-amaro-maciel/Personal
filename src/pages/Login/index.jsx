import { useNavigate } from 'react-router-dom';
import { useId, useState } from 'react';

import {
    Container,
    RightContainer,
    LeftContainer,
    Button,
} from './style';

import Input from '../../components/Input';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const id = useId();
    const navigate = useNavigate()

    const onRegister = () => {
        navigate('/cadastro')
    }

    const onLogin = (event) => {
        event.preventDefault()
        if (email && password) {
            fetch('https://chiwawa-fit-backend.herokuapp.com/auth/signin', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "login": email,
                    "password": password,
                })
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.access_token)
                navigate('/alunos')
            })
            .catch(response => console.log(response))
        }
    }

    const handleEmail = (value) => {
        setEmail(value)
    }

    const handlePassword= (value) => {
        setPassword(value)
    }

    return (
        <Container>
            <LeftContainer method='GET'>
                <div className='box'>
                    <span className='title'>Login</span>

                    <Input 
                        type="email" 
                        name="email" 
                        autoComplete='off' 
                        id={`${id}-email`}
                        title="E-mail"
                        onChange={(e) => handleEmail(e.target.value)}
                    />

                    <Input 
                        type="password" 
                        name="password" 
                        autoComplete='off' 
                        id={`${id}-password`}
                        title="Senha" 
                        onChange={(e) => handlePassword(e.target.value)}
                    />

                    <Button onClick={(event) => onLogin(event)}>Entrar</Button>
                    
                    <span className='create-account'>
                        Ainda não tem conta? <u><strong onClick={onRegister}>cadastre-se</strong></u>
                    </span>
                </div>
            </LeftContainer>
            <RightContainer/>
        </Container>
    )
}

export default Login;