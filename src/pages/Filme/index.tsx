import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api"
import { filme } from "../../types/filmes";
import { FaCircleNotch } from "react-icons/fa6";
import { toast } from "react-toastify";
import "./styles.css"

export const Filme = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState<filme>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "c1d11c636718f9b05abe1b9602d50493",
                    language: "pt-br",
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    navigate("/", { replace: true });
                    return;
                })
        }

        loadFilme()
    }, [navigate, id])

    if (loading) {
        return (
            <FaCircleNotch className="loading-icon" />
        )
    }

    function salvarFilme() {
        if (filme) {
            const minhaLista = localStorage.getItem("@primeflix") || "";

            const filmesSalvos: filme[] = JSON.parse(minhaLista) || [];

            const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

            if (hasFilme) {
                toast.warn("ESSE FILME JÁ ESTA NA LISTA");
                return;
            }

            filmesSalvos.push(filme);
            localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
            toast.success("FILME SALVO COM SUCESSO")
        }
    }


    return (
        <div className="filme-info" >
            <h1>{filme?.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme?.backdrop_path}`} alt={filme?.title} />
            <h3>Sinopse</h3>
            <span>{filme?.overview}</span>
            <strong>Avaliação: {filme?.vote_average} / 10</strong>

            <div className="area-button" >
                <button onClick={() => salvarFilme()} >Salvar</button>
                <button>
                    <a rel="external" href={`https://youtube.com/results?search_query=${filme?.title} Trailer`} target="blank" >
                        Trailer
                    </a>
                </button>
            </div>
        </div >
    )
}