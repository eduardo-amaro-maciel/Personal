import { useEffect, useId, useState } from "react"
import { useNavigate } from "react-router-dom"

import { 
    Container, 
    Button,
    RightContainer,
    LeftContainer
} from "./styles"

import Input from "../../components/Input"
import SelectCity from "../../components/SelectCity"

import SnackbarMui from "../../components/Snackbar"

function Register() {

    const [name, setName] =  useState('')
    const [tel, setTel] =  useState('')
    const [email, setEmail] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [license, setLicense] = useState('')
    const [password, setPassword] = useState('')
    const [repPassword, setRepPassword] = useState('')
    const [snackBarShow, setSnackBarShow] = useState(false)
    const [snackBarVariant, setSnackBarVariant] = useState('')
    const [snackBarText, setSnackBarText] = useState('')

    const id = useId()
    const navigate = useNavigate()
    
    const onCancel = () => {
        navigate('/login')
    }

   
    const sucessoAoCadastrar = () => {
        setSnackBarShow(true)
        setSnackBarVariant('error')
        setSnackBarText('Ops! As senhas devem ser iguais!')
    }
    

    const onConfirm = async (event) => {
        event.preventDefault()
        
        if (
            name &&
            tel &&
            email &&
            state &&
            city &&
            password &&
            repPassword &&
            license
        ) {
            if (password == repPassword) {
                
                    /*fetch('https://chiwawa-fit-backend.herokuapp.com/auth/singup/personal', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json; charset=utf-8',
                        },
                        body: JSON.stringify({
                            "name": name,
                            "email": "eduardo.amaro164@gmail.com",
                            "password": password,
                            "city": city,
                            "state":state,
                            "phone": tel,
                            "license": license
                        })
                    }).then(e=>e.json())
                    .then(e=>console.log(e))*/
                    fetch('https://chiwawa-fit-backend.herokuapp.com/auth/signup/personal', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "name": name,
                            "email": email,
                            "password": password,
                            "city": city,
                            "state": state,
                            "phone": tel,
                            "license": license
                        })
                    })
                    .then(response => response.json())
                    .then(response => {
                        console.log(response)
                    })
                    .catch(response => console.log(response))
            } else {
                setSnackBarShow(true)
                setSnackBarVariant('error')
                setSnackBarText('Ops! As senhas devem ser iguais!')
            }
        } else {
            setSnackBarShow(true)
            setSnackBarVariant('error')
            setSnackBarText('Ops! Preencha todos os campos!')
        }
    }

    return (
        <Container>
            <LeftContainer />
            <RightContainer method="POST">
                <div className="box">
                    <span className='title'>Fazer Cadastro</span>
                    <Input 
                        type="text" 
                        name="text" 
                        autoComplete='off' 
                        id={`${id}-text`}
                        title="Nome completo"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input 
                        type="tel" 
                        name="tel" 
                        autoComplete='off' 
                        id={`${id}-tel`}
                        title="Telefone"
                        onChange={(e) => setTel(e.target.value)}
                    />
                    
                    <Input 
                        type="email" 
                        name="email" 
                        autoComplete='off' 
                        id={`${id}-email`}
                        title="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <SelectCity
                        handleCity={setCity}
                        handleState={setState}
                    />

                    <Input 
                        type="password" 
                        name="password" 
                        autoComplete='off' 
                        id={`${id}-password`}
                        title="Senha" 
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Input 
                        type="password" 
                        name="r-password" 
                        autoComplete='off' 
                        id={`${id}-r-password`}
                        title="Repita a senha" 
                        onChange={(e) => setRepPassword(e.target.value)}
                    />

                    <Input 
                        type="license" 
                        name="license" 
                        autoComplete='off' 
                        id={`${id}-license`}
                        title="Número da licença" 
                        onChange={(e) => setLicense(e.target.value)}
                    />

                    <Button onClick={onConfirm}>Solicitar Cadastro</Button>
                    <Button mType="default" onClick={onCancel}>Cancelar</Button>

                    <SnackbarMui 
                        snackBarShow={snackBarShow} 
                        message={snackBarText}
                        variant={snackBarVariant}
                    />
                </div>
            </RightContainer>
        </Container>
    )
}

export default Register