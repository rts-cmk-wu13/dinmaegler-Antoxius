import Medarbejdere_Card from "./Medarbejdere_Card";

export default function Medarbejdere(){

    return(
        <div className="mx-auto container text-center max-w-4xl">
            <div className="p-5">
            <h2 className="font-bold text-3xl p-10">Mød vores engagerede medarbejdere</h2>
            <p>Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>

            </div>
            <section className="flex gap-10 justify-between ">
                <Medarbejdere_Card />
                <Medarbejdere_Card />
                <Medarbejdere_Card />
            </section>
            <button className="bg-[#0E1A2B] text-white font-bold my-10 py-4 px-6">Se alle mæglere</button>
        </div>
    )
}