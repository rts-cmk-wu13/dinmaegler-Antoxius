import { FaPaperPlane, FaPhone } from "react-icons/fa";
import { Link } from "react-router";
export default function Navigation(){

    return(
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
            <div className="flex items-center gap-2">
                <Link to="/">
                    <img src="src/assets/home_din_maegler.svg" alt="Home"/>
                </Link>
            </div>
            <div className="gap-5 flex items-center">
                <Link to="/property-list">Boliger til salg</Link>
                <Link to="/">Mæglere</Link>
                <Link to="/">Mine favoriter</Link>
                <Link to="/">Kontakt os</Link>
            </div>
        </nav>
    )
}