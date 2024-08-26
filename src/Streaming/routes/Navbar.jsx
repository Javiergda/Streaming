import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {

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
                    Javier García
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