import { useState } from "react";
import { BASE_URL, API_KEY, API_TOKEN, IMAGE_URL } from "../../../../settings";
import { useFetch } from "../../hooks/useFetch"
import { FilmCard } from "./FilmCard";


export const StreamingPage = () => {


    console.log('StreamingPage: me cargo');

    // url de búsqueda
    const [searchUrl, setSearchUrl] = useState('/discover/movie?sort_by=popularity.desc&api_key=');

    const { data, isLoading, hasError } = useFetch(`${BASE_URL}${searchUrl}${API_KEY}`);

    const { results: films } = data;
    console.log('data principal');
    console.log(films);



    const [form, setForm] = useState({ searchText: '' });
    const { searchText } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log('modificamos url de búsqueda');
        setSearchUrl(`/search/movie?query=${searchText}&api_key=`);






    }


    return (
        <>
            <h1>StreamingPage</h1>
            <form>
                <input
                    type="text"
                    placeholder="Search a film"
                    value={searchText}
                    name="searchText"
                    onChange={handleChange}
                ></input>
                <button
                    onClick={handleClick}
                    name="buttonSearch"
                >
                    Buscar
                </button>
            </form>



            {isLoading && <p>Cargando...</p>}
            {
                films?.map((film) => (
                    <FilmCard
                        key={film.id}
                        {...film}
                    />
                ))
            }
        </>
    )
}
