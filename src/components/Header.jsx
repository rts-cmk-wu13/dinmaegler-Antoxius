import { FaPaperPlane, FaPhone, FaUserAlt } from "react-icons/fa";
import Navigation from "./Navigation";

export default function Header(){

    return(
        <>
        <header className="min-w-full relative container">
            <div className="bg-[#0E1A2B] h-10 gap-5 items-center">
                <div className="container justify-around py-2 flex mx-auto items-center">
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
                <Navigation />
                
        </header>
        </>
    )
}