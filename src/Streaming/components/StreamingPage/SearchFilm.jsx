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

    const handleClick = (e) => {
        e.preventDefault();

        setSearchUrl(`/search/movie?query=${searchText.trim()}&api_key=`);
    }


    console.log(searchText);

    return (
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
    )
}
