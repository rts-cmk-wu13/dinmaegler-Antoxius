import { FaArrowRight } from "react-icons/fa";

export default function Newsletter(){

    return(
        <div className="bg-blend-multiply bg-[#616c7c] py-10 text-white" style={{backgroundImage: 'url(src/assets/building.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="flex items-center justify-around gap-4 max-w-4xl mx-auto">
                    <p className="font-bold py-2 w-80">Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</p>
                    <form className="flex justify-around ">
                        <input type="email" placeholder="Indtast din email" name="newsletter-email" className="border-none text-black bg-white p-2 rounded-l-sm" />
                        <button className="text-[#0E1A2B] bg-white px-4 rounded-r-sm">
                            <FaArrowRight className="inline text-black" />
                        </button>
                    </form>
            </div>
        </div>
    )
}