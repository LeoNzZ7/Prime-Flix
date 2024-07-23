import { Link } from "react-router-dom";
import "./style.css";


export const Header = () => {
    return (
        <header>
            <Link className="logo" to="/">
                Prime Flix
            </Link>
            <Link className="favoritos" to="/favoritos" >
                Favoritos
            </Link>
        </header>
    )
}