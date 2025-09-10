import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router";
import logoUrl from "../assets/home_din_maegler.svg";

export default function Navigation() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 relative">
            <div className="flex w-full md:w-auto justify-between items-center">
                <Link to="/">
                    <img src={logoUrl} alt="Home" className="h-10 w-auto" />
                </Link>
                <button
                    className="md:hidden text-2xl p-2 focus:outline-none"
                    aria-label="Åbn navigation"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <FaBars />
                </button>
            </div>
            <div
                className={`flex-col md:flex-row gap-5 flex items-center w-full md:w-auto md:flex ${open ? 'flex' : 'hidden'} md:!flex bg-white md:bg-transparent absolute md:static left-0 top-full md:top-auto z-20 md:z-auto shadow md:shadow-none p-4 md:p-0`}
                role="menu"
            >
                <Link to="/property-list" className="w-full md:w-auto py-2 md:py-0" role="menuitem" onClick={() => setOpen(false)}>Boliger til salg</Link>
                <Link to="/" className="w-full md:w-auto py-2 md:py-0" role="menuitem" onClick={() => setOpen(false)}>Mæglere</Link>
                <Link to="/" className="w-full md:w-auto py-2 md:py-0" role="menuitem" onClick={() => setOpen(false)}>Mine favoriter</Link>
                <Link to="/" className="w-full md:w-auto py-2 md:py-0" role="menuitem" onClick={() => setOpen(false)}>Kontakt os</Link>
            </div>
        </nav>
    );
}