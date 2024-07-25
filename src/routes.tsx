import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Filme } from "./pages/Filme"
import { Header } from "./components/header"
import { NotFound } from "./pages/NotFound"
import { Favoritos } from "./pages/favoritos"

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}