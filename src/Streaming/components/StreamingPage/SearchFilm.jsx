import React, { useState } from 'react'

export const SearchFilm = ({ setSearchUrl }) => {

    const [form, setForm] = useState({ searchText: '' });
    const { searchText } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchUrl(`/search/movie?query=${searchText.trim()}&api_key=`);

        // LOCALSTORAGE. Guardamos ultima búsqueda en local storage para cuando vuelva a la pagina principal y se refresque comprobara si habia alguna búsqueda y volvera a ella.
        localStorage.setItem('lastPath', `/search/movie?query=${searchText.trim()}&api_key=`);
    }

    const handleRefresh = () => {
        //LOCALSTORAGE. Borramos ultima búsqueda para que cargue pagina principal
        localStorage.removeItem('lastPath');
        navigate('/');
    }

    return (
        <form className='searchFilm'>
            <input
                type="text"
                placeholder="Título de película"
                value={searchText}
                name="searchText"
                onChange={handleChange}
            ></input>
            <button
                onClick={handleSearch}
                name="buttonSearch"
            >
                Buscar
            </button>
            <button
                onClick={handleRefresh}
                name="buttonRefresh"
            >
                Reiniciar
            </button>
        </form>
    )
}
