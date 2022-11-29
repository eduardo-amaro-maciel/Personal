import { useNavigate } from "react-router-dom"

function PrivateRoute({ children }) {
    const navigation = useNavigate()

    return localStorage.getItem('token') ? children : navigation('/login')
}

export default PrivateRoute