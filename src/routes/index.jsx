import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './privateRoute'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Alunos from '../pages/Alunos'
import Aluno from '../pages/Aluno'

function RoutesApp() {
    return (
        <Router> 
            <Routes>
                <Route path='/login' element={
                    <Login/>
                }/>
                <Route path='/cadastro' element={
                    <Register/>
                }/>
                <Route path='/alunos' element={
                    <PrivateRoute>
                        <Alunos/>
                    </PrivateRoute>
                }/>
                <Route path='/alunos/:id' element={
                    <PrivateRoute>
                        <Aluno/>
                    </PrivateRoute>
                }/>
            </Routes>
        </Router>
    )
}

export default RoutesApp