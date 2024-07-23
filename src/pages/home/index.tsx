import { useEffect, useState } from "react"
import api from "../../services/api"
import { filme } from "../../types/filmes";
import { Filmes } from "../../components/filmes";
import { FaCircleNotch } from "react-icons/fa6";
import "./styles.css"

export const Home = () => {
    const [filmes, setFilmes] = useState<filme[] | []>([]);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        async function carregarFilmes() {
            const response = await api.get("movie/now_playing?api_key=c1d11c636718f9b05abe1b9602d50493&language=pt-br", {
                params: {
                    api_key: "c1d11c636718f9b05abe1b9602d50493",
                    languege: "pt-br",
                    page: 1,
                }
            })

            if (response.status === 200) {
                setFilmes(response.data.results)
                setLoading(false)
            }

            return false;
        }

        carregarFilmes();

    }, [])

    if (loading) {
        return (
            <FaCircleNotch className="loading-icon" />
        )
    }

    return (
        <div className="container" >
            <div className="lista-filmes" >
                {filmes.map((filme, index) => (
                    <Filmes filme={filme} key={index} />
                ))}
            </div>
        </div>
    )
}