

import { useLoaderData } from "react-router";
import Gallery from "../components/Gallery";
import PropertySpecs from "../components/PropertySpecs";
import { FaPhoneAlt, FaTelegramPlane, FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa";

export default function Property_Details() {
    const home = useLoaderData();
    
    if (!home) return <div className="p-8">Bolig ikke fundet.</div>;

    return (
        <>
            <Gallery home={home} />
            <PropertySpecs home={home} />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto my-10 px-4 md:px-8 lg:px-16">
                {/* Beskrivelse */}
                <article>
                    <h3 className="text-lg font-bold mb-3">Beskrivelse</h3>
                    <p className="whitespace-pre-line leading-relaxed text-gray-700">
                        {home.description}
                    </p>
                </article>

                {/* Ansvarlig mægler */}
                <article>
                    <h3 className="text-lg font-bold mb-3">Ansvarlig mægler</h3>
                    <div className="border border-gray-200 bg-white p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Billede med SoMe overlay */}
                        <div className="relative">
                            <img src={home.agent.image.url} alt={home.agent.name} className="w-full h-48 md:h-56 object-cover" />
                            <div className="absolute bg-[#0E1A2B] bottom-5 flex gap-2">
                                <a href="#" aria-label="Instagram" className=" text-white p-2 shadow">
                                    <FaInstagram />
                                </a>
                                <a href="#" aria-label="LinkedIn" className=" text-white p-2 shadow">
                                    <FaLinkedinIn />
                                </a>
                                <a href="#" aria-label="Skype" className=" text-white p-2 shadow">
                                    <FaSkype />
                                </a>
                            </div>
                        </div>

                        {/* Oplysninger */}
                        <div className="pt-1 flex flex-col">
                            <p className="font-bold text-xl">{home.agent.name}</p>
                            <p className="text-sm text-gray-600">{home.agent.title}</p>
                            <div className="w-14 border-t-2 border-gray-200 my-3" />

                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2 items-center text-gray-700">
                                    <FaPhoneAlt className="shrink-0" />
                                    <p className="text-sm">{home.agent.phone}</p>
                                </div>
                                <div className="flex gap-2 items-center text-gray-700">
                                    <FaTelegramPlane className="shrink-0" />
                                    <p className="text-sm">{home.agent.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

        </>
    );
}