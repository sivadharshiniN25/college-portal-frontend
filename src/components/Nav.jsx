import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <nav className="navbar">

            <Link to="/" className="navlink">Home</Link>

            <Link to="/About" className="navlink">About</Link>

            <Link to="/Contact" className="navlink">Contact</Link>

        </nav>
    )
}