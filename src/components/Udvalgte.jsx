import Udvalgte_Card from "./Udvalgte_Card";

export default function Udvalgte(){

    return(
        <>
        <section className="bg-gray-100 mx-auto">
        <h2 className="text-2xl font-bold text-center py-10">Udvalgte boliger</h2>
        <p className="text-center w-1/2 mx-auto pb-2">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Udvalgte_Card />
            <Udvalgte_Card />
            <Udvalgte_Card />
            <Udvalgte_Card />
        </section>
        <div className="flex justify-center">
            <button className="bg-[#0E1A2B] text-white px-10 py-3 my-10">Se alle boliger</button>
        </div>
        </section>
        
        </>
    )
}