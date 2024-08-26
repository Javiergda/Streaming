import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate();



    const handleLogin = () => {
        navigate('/', {
            replace: true
        });

    }

    return (


        <div className="loginPage">
            <h1>Login Page</h1>

            <button
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
