import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/Pages/LoginPage"
import { StreamingRoutes } from "../Streaming/routes/StreamingRoutes"
import { AuthContext } from "../auth/context/AuthContext"
import { useContext } from "react"



export const AppRouter = () => {

    const { user } = useContext(AuthContext); // comprobamos si esta logeado

    return (
        <>
            <Routes>
                <Route path="login" element={!user.logged ? <LoginPage /> : <Navigate to='/' />} />
                <Route path="/*" element={user.logged ? <StreamingRoutes /> : <Navigate to='login' />} />
            </Routes>
        </>
    )
}
