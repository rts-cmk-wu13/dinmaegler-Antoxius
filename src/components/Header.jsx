import { FaPaperPlane, FaPhone, FaUserAlt } from "react-icons/fa";
import Navigation from "./Navigation";

export default function Header(){

    return(
        <>
        <header className="w-full bg-white">
            <div className="bg-[#0E1A2B] h-10 w-full">
                <div className="max-w-6xl mx-auto flex justify-between items-center h-full px-4">
                    <div className="flex gap-5 text-white">
                        <div className="flex gap-2 items-center">
                            <FaPaperPlane />
                            <a href="mailto:4000@dinmaegler.com">4000@dinmaegler.com</a>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaPhone />
                            <a href="tel:+4570704000">+45 7070 4000</a>
                        </div>
                    </div>
                    <div className="flex items-center text-white gap-1.5 ">
                        <FaUserAlt/>
                        <button>Log ind</button>
                    </div>
                </div>
            </div>
                <div className="w-full bg-white">
                    <Navigation />
                </div>
                
        </header>
        </>
    )
}