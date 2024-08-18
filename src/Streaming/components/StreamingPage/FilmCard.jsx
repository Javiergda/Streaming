import React from 'react'
import { IMAGE_URL } from '../../../../settings'
import { Link } from 'react-router-dom'


export const FilmCard = ({ poster_path, original_title, id }) => {


    return (
        <div className='filmCard animate__animated animate__fadeIn'>

            {/* <p >{original_title}</p> */}

            <Link to={`film/${id}`}>
                <img src={`${IMAGE_URL + poster_path}`} alt="No imagen" />
            </Link>

        </div>
    )
}
