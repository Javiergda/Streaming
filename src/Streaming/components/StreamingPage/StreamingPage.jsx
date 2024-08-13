import { BASE_URL, API_KEY, API_TOKEN, IMAGE_URL } from "../../../../settings";
import { useFetch } from "../../hooks/useFetch"
import { FilmCard } from "./FilmCard";


export const StreamingPage = () => {


    const { data, isLoading, hasError } = useFetch(`${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);

    const { results } = data;
    console.log(results);


    return (
        <>
            <h1>StreamingPage</h1>
            {isLoading && <p>Cargando...</p>}
            {
                results?.map((film) => (
                    <FilmCard
                        key={film.id}
                        {...film}
                    />



                ))
            }
        </>
    )
}
