import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { Filme } from "./pages/filmes"

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme" element={<Filme />} />
            </Routes>
        </BrowserRouter>
    )
}