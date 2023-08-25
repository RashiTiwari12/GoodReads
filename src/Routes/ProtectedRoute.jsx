import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const ProtectedRoute = (props) => {
    const { component } = props;
    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            navigate('/login')
        }
    }, [])
    return (
        <>
            <component />
        </>
    )
}

export default ProtectedRoute