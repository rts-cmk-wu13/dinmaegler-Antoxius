import { PiImageLight} from "react-icons/pi";
import { IoLayersOutline, IoLocationOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";

export default function Gallery({ home }) {
    if (!home) return null;

    return (
        <div className="w-full">
            {/* Hero image */}
            <div className="relative w-full h-64 md:h-[420px] flex items-center justify-center overflow-hidden">
                <img src={home.images[0].url} alt={home.adress1} className="w-full h-full object-cover" />
            </div>

            {/* Address, icons, and price row */}
            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white border-b-1 p-4 md:p-6">
                    <div>
                        <h1 className=" md:text-2xl font-bold mb-0">{home.adress1}</h1>
                        <p className="text-gray-600 mb-2">{home.postalcode} {home.city}</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <div className="flex gap-8 md:gap-12 text-gray-700 text-lg justify-center mb-2">
                            <span title="Galleri" className="flex flex-col items-center"><PiImageLight className="w-10 h-10 mb-1"/></span>
                            <span title="Grund" className="flex flex-col items-center"><IoLayersOutline className="w-10 h-10 mb-1" /></span>
                            <span title="Værelser" className="flex flex-col items-center"><IoLocationOutline className="w-10 h-10 mb-1" /></span>
                            <span title="Favorit" className="flex flex-col items-center"><GrFavorite className="w-10 h-10 mb-1" /></span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end min-w-[200px]">
                        <span className="text-lg md:text-2xl font-bold text-[#0E1A2B] mb-2">Kr. {home.price.toLocaleString('da-DK')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}