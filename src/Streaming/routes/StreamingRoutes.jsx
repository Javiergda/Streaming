import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { StreamingPage } from '../components/StreamingPage/StreamingPage'
import { FilmDetail } from '../components/FilmPage/FilmDetail'
import { Navbar } from './Navbar'


export const StreamingRoutes = () => {
    return (

        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<StreamingPage />} />
                <Route path="film/:id" element={<FilmDetail />} />

                <Route path="film/" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}
