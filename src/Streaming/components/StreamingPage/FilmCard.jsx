import React from 'react'
import { IMAGE_URL } from '../../../../settings'
import { Link } from 'react-router-dom'

export const FilmCard = ({ poster_path, original_title, id }) => {


    return (
        <div className='filmCard'>

            <p >{original_title}</p>
            <img src={`${IMAGE_URL + poster_path}`} alt="No imagen" />

            <Link to={`film/${id}`}>
                ... mas info
            </Link>

        </div>
    )
}
