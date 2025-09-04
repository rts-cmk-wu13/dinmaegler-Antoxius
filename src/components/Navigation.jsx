import { FaPaperPlane, FaPhone } from "react-icons/fa";
import { Link } from "react-router";
export default function Navigation(){

    return(
        <nav className="justify-around flex gap-5 my-5 items-center"> 
            <div className="flex items-center gap-2">
            <img src="src/assets/home_din_maegler.svg" alt="Home"/>
            </div>
            <div className="gap-5 flex items-center">
                <Link to="/">Boliger til salg</Link>
                <Link to="/">Mæglere</Link>
                <Link to="/">Mine favoriter</Link>
                <Link to="/">Kontakt os</Link>
            </div>
        </nav>
    )
}