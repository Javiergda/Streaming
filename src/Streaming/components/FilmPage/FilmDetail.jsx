import { useParams } from "react-router-dom"
import { BASE_URL, API_KEY, IMAGE_URL } from "../../../../settings";
import { useFetch } from "../../hooks/useFetch";



export const FilmDetail = () => {

    // Obtenemos el id pasada por parametros de la película enviada
    const { id } = useParams();




    // Obtenemos informacion detallada de la película enviada
    const { data, isLoading, hasError } = useFetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    console.log(data);



    return (
        <>
            <h1>FilmDetail</h1>

            <img src={`${IMAGE_URL + data.poster_path}`} alt="No imagen" height={300} width={200} />

        </>

    )
}
