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
            <img
                src={`${IMAGE_URL + data.poster_path}`}
                alt="No imagen"
                className="animate__animated animate__fadeInLeft"
            />


            {isLoading ?
                <p className="loading">Cargando...</p>
                :
                <p>
                    <h3>{data.original_title}</h3>
                    <ul>
                        <li>
                            <b>Titulo original: </b>{data.original_title}
                        </li>
                        <li>
                            <b>Web: </b><a href={data.homepage}>{data.homepage}</a>
                        </li>
                        <li>
                            <b>Popularidad: </b>{data.popularity}
                        </li>
                        <li>
                            <b>Fecha de lanzamiento: </b>{data.release_date}
                        </li>

                    </ul>
                    <h3>Resumen</h3>
                    <section>
                        {data.overview}
                    </section>
                    <button
                        onClick={handleNavigateBack}
                    >
                        Volver
                    </button>
                </p>
            }

        </div>

    )
}
