import { useState } from "react";
import { BASE_URL, API_KEY, API_TOKEN, IMAGE_URL } from "../../../../settings";
import { useFetch } from "../../hooks/useFetch"
import { FilmCard } from "./FilmCard";
import { SearchFilm } from "./SearchFilm";


export const StreamingPage = () => {




    // url de búsqueda
    const [searchUrl, setSearchUrl] = useState('/discover/movie?sort_by=popularity.desc&api_key=');

    const { data, isLoading, hasError } = useFetch(`${BASE_URL}${searchUrl}${API_KEY}`);
    const { results: films } = data;
    console.log(data);

    return (
        <div className='streamingPage'>


            <SearchFilm setSearchUrl={setSearchUrl} />

            {isLoading && <p className="loading">Cargando...</p>}

            <div className="wrapFilms">

                {

                    films?.map((film) => (
                        <FilmCard
                            key={film.id}
                            {...film}
                        />
                    ))

                }

            </div>

        </div>
    )
}
