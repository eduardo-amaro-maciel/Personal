import { useState, useEffect } from 'react';

import Menu from '@mui/material/Menu'
import Badge from '@mui/material/Badge'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'

import { CardNotification, Button } from './style';

function LongMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [notification, setNotification] = useState([])

    const handleClick = event => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    const studentRejectOrAccpet = (id, condition) => {
        const token = localStorage.getItem('token')

        if (condition) {
            const url = `https://chiwawa-fit-backend.herokuapp.com/personal/requests/${id}?`+ new URLSearchParams({ status: "accepted" })
            fetch(url, {                    
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
            .catch(response => console.log(response))

        } else {
            const url = `https://chiwawa-fit-backend.herokuapp.com/personal/requests/${id}?`+ new URLSearchParams({ status: "rejected" })
            fetch(url, {                    
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
            .catch(response => console.log(response))
        }
    }

    const requestNotifications = () => {
        const token = localStorage.getItem('token')
        fetch('https://chiwawa-fit-backend.herokuapp.com/personal/requests', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            .then(response => response.json())
            .then(response => {
                setNotification(response)
                console.log(response)
            })
            .catch(response => console.log(response))
    }
    
    useEffect(() => {
        requestNotifications()
    }, [])

    return (
        <div>
            <Badge 
                sx={{ fontSize: 40 }} 
                badgeContent={notification.length} 
                color="secondary"
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <CircleNotificationsIcon sx={{ fontSize: 37 }} color="action" />
            </Badge>
            <Menu
                id="long-menu"
                MenuListProps={{'aria-labelledby': 'long-button',}}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        paddingTop: 0,
                        paddingBottom: 0,
                    },
                  }}
            >
                
                {notification?.map(aluno => (
                    <CardNotification key={aluno.id} id={aluno.id}>
                        <img src="https://thumbs.dreamstime.com/b/do-retrato-masculino-do-avatar-do-%C3%ADcone-do-perfil-pessoa-ocasional-47075235.jpg" alt="imagem aluno" />
                        <span><b>Nome:</b> {aluno.student.profile.name}</span>
                        <span><b>Data de nascimento:</b> {aluno.student.profile.birth_date}</span>
                        <span><b>Cidade:</b> {aluno.student.profile.city}</span>
                        <span><b>Genero:</b> {aluno.student.profile.gender}</span>
                        <span><b>Contato:</b> {aluno.student.profilephone}</span>
                        <span><b>Estado:</b> {aluno.student.profile.state}</span>
                        <span><b>Contato:</b> {aluno.student.profile.phone}</span>
                        <span><b>Altura:</b> {aluno.student.height}</span>
                        <span><b>Peso:</b> {aluno.student.wight}</span>
                        <div className='btn-display'>
                            <Button mType="default" onClick={() => studentRejectOrAccpet(aluno.id, true)}>
                                Aceitar
                            </Button>
                            <Button onClick={() => studentRejectOrAccpet(aluno.id, false)}>
                                Recusar
                            </Button>
                        </div>
                    </CardNotification>
                ))}
            </Menu>
        </div>
    );
}

export default LongMenu