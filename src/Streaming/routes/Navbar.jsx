import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate('/login', {
            replace: true //evita regresar a la pagina anterior
        });
    }

    return (
        <nav className="navbar">

            <Link
                //      className={({ isActive }) => `${isActive ? 'active' : ''}`}
                to="/"
            >
                Peliculas
            </Link>

            <div>
                <span>
                    {user?.name}
                </span>

                <button
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

        </nav>
    )
}