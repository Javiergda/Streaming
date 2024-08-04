import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/Pages/LoginPage"
import { StreamingRoutes } from "../Streaming/routes/StreamingRoutes"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<StreamingRoutes />} />
            </Routes>
        </>
    )
}
