import { useNavigate } from 'react-router-dom';
import  LongMenu  from '../../components/LongMenu'
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { 
    BarTop, 
    Container, 
    Content,
    StudentCard
} from "./style"
import { useEffect, useState } from 'react';

function MyStudents() {
    const [busca, setBusca] = useState('');
    const navigation = useNavigate()
    const [data, setData] = useState([])

    const getStudents = () => {
        const token = localStorage.getItem('token')
        
        fetch('https://chiwawa-fit-backend.herokuapp.com/personal/my-students', {
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
                setData(response)
            })
            .catch(response => console.log(response))
    }

    useEffect(() => {
        getStudents()
    }, [])

    const onViewStudent = id => navigation(`/alunos/${id}`)

    const filterAlunos = busca.length > 0
        ? data.filter(e => e.profile.name.toLocaleLowerCase().includes(busca)) 
        : []
    
    return (
        <Container>
            <BarTop>
                <Fab onClick={() => navigation('/login')} sx={{ backgroundColor: '#1C94FF' }} className="btn-return" variant="extended" color="primary" aria-label="add">
                    <ArrowBackIcon />
                    Sair
                </Fab>
                <span className="area-text">Meu Alunos</span>
                <LongMenu />
            </BarTop>
            <Content>
                <div className='search'>
                    <input 
                        type="search" 
                        value={busca} 
                        name="search" 
                        id="search"
                        placeholder="Buscar aluno"
                        onChange={(event) => setBusca(event.target.value)}
                    />
                    <SearchIcon/>
                </div>
                
                { busca.length > 0 ? (
                    <>
                        {filterAlunos.map((aluno) => (
                            <StudentCard 
                                key={aluno.profile_id} 
                                id={`aluno-${aluno.profile_id}`} 
                                onClick={() => onViewStudent(aluno.profile_id)}
                            >
                                <img src="https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-47075235.jpg" alt="imagem aluno" />
                                <span className='student-name'>{aluno.profile.name}</span>
                            </StudentCard>
                        ))}
                   </>
                ) : (
                   <>
                        {data.map((aluno) => (
                            <StudentCard 
                                key={aluno.profile_id} 
                                id={`aluno-${aluno.profile_id}`} 
                                onClick={() => onViewStudent(aluno.profile_id)}
                            >
                                <img src="https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-47075235.jpg" alt="imagem aluno" />
                                <span className='student-name'>{aluno.profile.name}</span>
                            </StudentCard>
                        ))}
                   </>
                )}
            </Content>
        </Container>
    )
}

export default MyStudents