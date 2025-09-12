import { PiImageLight} from "react-icons/pi";
import { IoLayersOutline, IoLocationOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { useEffect, useState } from "react";
import heroFallback from "../assets/homepage_hero.jpg";

export default function Gallery({ home }) {
    if (!home) return null;

    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = Array.isArray(home.images) ? home.images : [];

    const openLightbox = (start = 0) => {
        if (!images.length) return;
        setIndex(Math.max(0, Math.min(start, images.length - 1)));
        setIsOpen(true);
    };
    const closeLightbox = () => setIsOpen(false);
    const next = () => {
        if (!images.length) return;
        setIndex((i) => (i + 1) % images.length);
    };
    const prev = () => {
        if (!images.length) return;
        setIndex((i) => (i - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen]);

    return (
        <div className="w-full">
            {/* Hero image */}
            <div className="relative w-full h-64 md:h-[420px] flex items-center justify-center overflow-hidden">
                <img src={(images[0] && images[0].url) || heroFallback} alt={home.adress1} className="w-full h-full object-cover" />
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
                            <button title="Galleri" aria-label="Åbn galleri" onClick={() => openLightbox(0)} className="flex flex-col items-center hover:text-black focus:outline-none">
                                <PiImageLight className="w-10 h-10 mb-1"/>
                            </button>
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

            {/* Lightbox overlay */}
            {isOpen && images.length > 0 && (
                <div className="fixed inset-0 z-50 bg-black/70 flex flex-col items-center justify-center p-4" role="dialog" aria-modal="true">
                    <div className="relative w-full max-w-5xl">
                        <img
                            src={images[index].url}
                            alt={`${home.adress1} billede ${index + 1}`}
                            className="w-full max-h-[70vh] object-contain rounded"
                        />

                        {/* Controls */}
                        <button onClick={closeLightbox} aria-label="Luk" className="absolute -top-10 right-0 text-white bg-black/40 hover:bg-black/60 px-3 py-1 rounded">Luk</button>
                        {images.length > 1 && (
                            <>
                                <button onClick={prev} aria-label="Forrige" className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full">‹</button>
                                <button onClick={next} aria-label="Næste" className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full">›</button>
                            </>
                        )}
                    </div>

                    {/* Icon row under image (like spec) */}
                    <div className="mt-6 flex items-center gap-10 text-white">
                        <PiImageLight className="w-8 h-8" />
                        <IoLayersOutline className="w-8 h-8" />
                        <IoLocationOutline className="w-8 h-8" />
                        <GrFavorite className="w-8 h-8" />
                    </div>
                </div>
            )}
        </div>
    );
}