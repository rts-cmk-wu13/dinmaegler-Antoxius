

import { useParams, useLoaderData } from "react-router";
import Gallery from "../components/Gallery";
import PropertySpecs from "../components/PropertySpecs";

export default function Property_Details() {
    const home = useLoaderData();
    
    if (!home) return <div className="p-8">Bolig ikke fundet.</div>;

    return (
        <>
            <Gallery home={home} />
            <PropertySpecs home={home} />

        </>
    );
}