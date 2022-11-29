import { useParams, useNavigate } from "react-router-dom";

import {
    Container,
    Content,
    CardAluno,
    BoxTreinos,
    Treino,
    Treinos
} from './style'

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BasicModal from '../../components/BasicModal'
import { useEffect, useState } from "react";

function Aluno() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false)
    const [dadosAluno, setDadosAluno] = useState()
    const [dadosDeTreino, setDadosDeTreino] = useState([])

    const getUserInfo = () => {
        const token = localStorage.getItem('token')
        fetch(`https://chiwawa-fit-backend.herokuapp.com/personal/my-students/${id}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setDadosAluno(response[0])
            })
            .catch(response => console.log(response))
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
       <Container>
            <BasicModal 
                open={modalOpen} 
                fn={setModalOpen}
                idUser={id}
                armazenar={setDadosDeTreino}
                old={dadosDeTreino}
            />
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                <Fab onClick={() => navigate('/alunos')} sx={{ backgroundColor: '#1C94FF' }} className="btn-return" variant="extended" color="primary" aria-label="add">
                    <ArrowBackIcon />
                    Voltar
                </Fab>
            </div>
            <Content>
                <Fab sx={{ backgroundColor: '#1C94FF' }} className="fab-button" variant="extended" color="primary" aria-label="add" onClick={() => setModalOpen(true)}>
                    <AddIcon />
                    Adicionar Treino
                </Fab>
                <CardAluno>
                    <img src="https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-47075235.jpg" alt="imagem aluno" />
                    <h1>Informações</h1>
                    <span><b>Nome:</b> {dadosAluno?.profile?.name}</span>
                    <span><b>Data de nascimento:</b> {dadosAluno?.profile?.birth_date}</span>
                    <span><b>Gênero</b> {dadosAluno?.profile?.gender}</span>
                    <span><b>Peso:</b> {dadosAluno?.weight}</span>
                    <span><b>Altura:</b> {dadosAluno?.height}</span>
                    <span><b>Cidade:</b> {dadosAluno?.profile?.city}</span>
                    <span><b>State:</b> {dadosAluno?.profile?.state}</span>
                    <span><b>Contato:</b> {dadosAluno?.profile?.phone}</span>
                </CardAluno>
                <Treinos>
                    <BoxTreinos>
                        {dadosDeTreino?.map(treino => (
                           <div key={treino.name} id={treino.name}>
                            <span><b>Nome:</b> {treino?.name}</span>
                            <span><b>Series:</b> {treino?.series}</span>
                            <span><b>Repetições:</b> {treino?.repetition}</span>
                            <span><b>Observações:</b> {treino?.note}</span>
                           </div>
                        ))}
                    </BoxTreinos>
                </Treinos>
            </Content>
       </Container>
    );
}

export default Aluno;