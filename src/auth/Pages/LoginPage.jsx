import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);


    const handleLogin = () => {

        login('Javier Garcia del Amo'); // llamamos al login del AuthProvider

        navigate('/', { // navegamos a ruta principal
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
