import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StreamingPage } from '../components/StreamingPage/StreamingPage'
import { FilmPage } from '../components/FilmPage/FilmPage'
import { SearchPage } from '../components/SearchPage/SearchPage'
import { Navbar } from './Navbar'

export const StreamingRoutes = () => {
    return (

        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<StreamingPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="film/:id" element={<FilmPage />} />
            </Routes>

        </>
    )
}
