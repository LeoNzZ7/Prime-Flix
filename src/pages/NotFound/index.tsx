import { TbError404 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "./styles.css"

export const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="not-found" >
            <TbError404 className="error-icon" />
            <h1>Página não encontrada</h1>
            <button onClick={() => navigate("/")}>Voltar para a Home</button>
        </div>
    )
}