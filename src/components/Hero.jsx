export default function Hero(){

    return(
        <>
        <section className="min-w-full relative container ">
            <div className="text-center pb-10 absolute left-1/2 top-2/5 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-white text-4xl font-bold">Søg efter din drømmebolig</h1>
            </div>
            <div className="bg-white p-4  absolute left-1/2 top-1/2 transform mt-10 -translate-x-1/2 -translate-y-1/2 w-180 h-auto">
                <p className="font-bold pb-2">Søg blandt 158 boliger til salg i 74 butikker </p>
                <p>Hvad skal din næste bolig indeholde</p>
                <div className="flex mt-2 gap-2 ">
                    <input className="border-1 w-full h-10 p-2" type="search" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" />
                    <button className="bg-[#0E1A2B] text-white px-7 rounded-sm">Søg</button>
                </div>
            </div>
            <img className="w-full" src="src/assets/homepage_hero.jpg" alt="Hero Image"/>
        </section>
        </>
    )
}