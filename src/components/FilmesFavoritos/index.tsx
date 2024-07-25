import { Link } from "react-router-dom"
import { filme } from "../../types/filmes"
import "./style.css"

type props = {
    filme: filme
    excluirFilme: (id: number) => void
}

export const FilmesFavoritos = ({ filme, excluirFilme }: props) => {
    //   <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
    //             <button onClick={() => excluirFilme(filme.id)} >Excluir</button>

    return (
        <li className="filme-favorito" >
            <div className="filme-favorito__banner" >
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            </div>
            <div className="filme-favorito__detalhes">
                <div className="filme-favorito__detalhes descricao" >
                    <h1>{filme.title}</h1>
                    <span>{filme.overview}</span>
                </div>
                <div className="filme-favorito__detalhes buttons" >
                    <button onClick={() => excluirFilme(filme.id)} >Excluir</button>
                    <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                </div>
            </div>
        </li>
    )
}