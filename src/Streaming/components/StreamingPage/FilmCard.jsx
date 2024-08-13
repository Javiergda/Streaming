import React from 'react'
import { IMAGE_URL } from '../../../../settings'
import { Link } from 'react-router-dom'

export const FilmCard = ({ poster_path, original_title, id }) => {


    return (
        <div>
            <p >{original_title}</p>
            <img src={`${IMAGE_URL + poster_path}`} alt="No imagen" height={300} width={200} />
            <Link to={`film/${id}`}>
                ... mas info
            </Link>

        </div>
    )
}
