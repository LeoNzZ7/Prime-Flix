import { Link } from "react-router-dom"
import { filme } from "../../types/filmes"
import "./styles.css"

type Props = {
    filme: filme,
}

export const Filmes = ({ filme }: Props) => {
    return (
        <article className="filme" >
            <strong className="filme-title" >{filme.title}</strong>
            <img className="filme-img" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
            <Link className="filme-link" to={`/filme/${filme.id}`}>Acessar</Link>
        </article>
    )
} 