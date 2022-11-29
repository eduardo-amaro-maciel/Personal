import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Input from '.././Input'
import Button from '.././Button'

import { SelectTreino } from '../../pages/Aluno/style';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const open = props.open;
  const handleClose = () => props.fn(false)
  const id = React.useId()
  const idStudent = props.idUser

  const [nomeDoExercicio, setNomeDoExercicio] = React.useState('')
  const [seriesDoExercico, setSeriesDoExercico] = React.useState('')
  const [repeticoesDoExercico, setRepeticoesDoExercico] = React.useState('')
  const [observacoesExercicios, setObservacoesExercicios] = React.useState('')
  const [diaDoTreino, setDiaDoTreino] = React.useState(0)

  const saveObjUser = (event) => {
    event.preventDefault()
    if (
      nomeDoExercicio &&
      seriesDoExercico &&
      repeticoesDoExercico &&
      observacoesExercicios &&
      diaDoTreino
    ) {
      props.armazenar([...props.old, {
        name: nomeDoExercicio,
        series: seriesDoExercico,
        repetition: repeticoesDoExercico,
        note: observacoesExercicios
      }])
      console.log(idStudent)
      const token = localStorage.getItem('token')
      fetch(`https://chiwawa-fit-backend.herokuapp.com/personal/my-students/${idStudent}/training-plan`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          "dayOfWeek": diaDoTreino,
          "exercicies": [
            {
              "name": nomeDoExercicio,
              "series": seriesDoExercico,
              "repetition": repeticoesDoExercico,
              "note": observacoesExercicios
            }
          ]
        })
      })
        .then(response => response.json())
        .then(response => {
          console.log('deu certo')
        })
        .catch(response => console.log(response))
    } else {
      console.log('preencha todos os campos')
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Adicionar novo treino</h1>
          <Input id={id} title="Nome do exercicio" autoComplete="off" onChange={(event) => setNomeDoExercicio(event.target.value)}/>
          <Input id={id} title="Serie" autoComplete="off" onChange={(event) => setSeriesDoExercico(event.target.value)}/>
          <Input id={id} title="Repetição" autoComplete="off" onChange={(event) => setRepeticoesDoExercico(event.target.value)}/>
          <Input id={id} title="Observações" autoComplete="off" onChange={(event) => setObservacoesExercicios(event.target.value)}/>
          <SelectTreino>
            <label htmlFor="select-modal">Dia para o treino</label>
            <select value={diaDoTreino} name="select-modal" id="select-modal" onChange={(event) => setDiaDoTreino(event.target.value)}>
              <option disabled value="0">Selecione um dia da semana</option>
              <option value="monday">Segunda-feira</option>
              <option value="tuesday">Terça-feira</option>
              <option value="wednesday">Quarta-feira</option>
              <option value="thursday">Quinta-feira</option>
              <option value="friday">Sexta-feira</option>
              <option value="saturday">Sabado</option>
              <option value="sunday">Domingo</option>
            </select>
          </SelectTreino>
        
          <button onClick={(event) => saveObjUser(event)}>salvar</button>
        </Box>
      </Modal>
    </div>
  );
}
