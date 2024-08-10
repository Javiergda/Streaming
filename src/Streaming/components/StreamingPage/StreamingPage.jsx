import { BASE_URL, API_KEY, API_TOKEN, IMAGE_URL } from "../../../../settings";
import { useFetch } from "../../hooks/useFetch"


export const StreamingPage = () => {


    const { data, isLoading, hasError } = useFetch(`${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);

    console.log(data, isLoading);

    return (
        <>


            <h1>StreamingPage</h1>

            {isLoading && <p>Cargando...</p>}


        </>



    )
}
