import { Navigate, HashRouter, Link, useNavigate, useParams } from "react-router-dom"
import { BASE_URL, API_KEY, IMAGE_URL } from "../../../../settings";
import { useFetch } from "../../hooks/useFetch";

export const FilmDetail = () => {

    // Obtenemos el id pasada por parametros de la película enviada
    const { id } = useParams();
    console.log(id);

    // Usamos el hook useNavigate para navegar entre paginas
    const navigate = useNavigate();

    // Obtenemos informacion detallada de la película enviada
    const { data, isLoading, hasError } = useFetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    console.log(data, isLoading, hasError);

    // Si tenemos error corta el renderizado para que no de error y nos manda directamente a localhost
    if (hasError) {
        return <Navigate to="/" />
    }

    const handleNavigateBack = () => {
        navigate(-1);
    }

    return (
        <div className="filmDetail">
            <h1>FilmDetail</h1>

            <img src={`${IMAGE_URL + data.poster_path}`} alt="No imagen" />
            <p>
                <ul>
                    <li>
                        Titulo original: {data.original_title}
                    </li>
                    <li>
                        Web: {data.homepage}
                    </li>
                    <li>
                        Popularidad: {data.popularity}
                    </li>
                    <li>
                        Fecha de lanzamiento: {data.release_date}
                    </li>
                </ul>

            </p>


            <button
                onClick={handleNavigateBack}
            >
                Volver
            </button>
        </div>

    )
}
