import { useEffect, useState } from "react"
import { filme } from "../../types/filmes"
import { FaCircleNotch } from "react-icons/fa6"
import "./styles.css"
import { toast } from "react-toastify"
import { FilmesFavoritos } from "../../components/FilmesFavoritos"

export const Favoritos = () => {
    const [filmes, setFIlmes] = useState<filme[]>()
    const [loading, setLoading] = useState(true)

    const excluirFilme = (id: number) => {
        const novaLista = filmes?.filter(filme => filme.id !== id)
        localStorage.setItem("@primeflix", JSON.stringify(novaLista))
        setFIlmes(novaLista)
        toast.success("FILME REMOVIDO DA SUA LISTA")
    };

    useEffect(() => {
        const favoritos = JSON.parse(localStorage.getItem("@primeflix") || "")
        setFIlmes(favoritos)
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <FaCircleNotch className="loading-icon" />
        )
    }

    return (
        <div className="meus-filmes" >
            <h1>Meus filmes</h1>
            <ul>
                {filmes?.map((item, index) => (
                    <FilmesFavoritos
                        key={index}
                        filme={item}
                        excluirFilme={excluirFilme}
                    />
                ))}
            </ul>
        </div>
    )
}