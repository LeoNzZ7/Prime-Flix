import { useEffect, useState } from "react"
import api from "../../services/api"
import { filme } from "../../types/filmes";
import { Filmes } from "../../components/filmes";

export const Home = () => {
    const [filmes, setFilmes] = useState<filme[] | []>([]);

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
            }

            return false;
        }

        carregarFilmes();

    }, [])

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