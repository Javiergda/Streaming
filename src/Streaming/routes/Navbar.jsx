import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar">

            <Link
                className={({ isActive }) => `${isActive ? 'active' : ''}`}
                to="/"
            >
                Peliculas
            </Link>

            <div>
                <NavLink
                    className="logout"
                    to="/login"
                >
                    <span>
                        Javier García
                    </span>
                </NavLink>

                <button>
                    Logout
                </button>
            </div>


        </nav>
    )
}