export default function Featured(){

    return(
    <section className="flex flex-col md:flex-row items-center justify-around gap-8 p-6 md:p-10">
            <div className="flex  gap-5">
                <img src="src/assets/property1.png" className="bg-blue-100 w-10 h-10 " />
                <div>
                    <h3 className="font-bold text-bold">Bestil salgscheck</h3>
                    <p className="w-50">Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.</p>
                </div>
            </div>
            <div className="flex gap-5">
                <img src="src/assets/property1.png" className="bg-blue-100 w-10 h-10 " />
                <div>
                    <h3 className="font-bold ">74 butikker</h3>
                    <p className="w-50">Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
                </div>
            </div>
            <div className="flex gap-5">
                <img src="src/assets/property1.png" className="bg-blue-100 w-10 h-10 " />
                <div>
                    <h3 className="font-bold ">Tilmeld køberkartotek</h3>
                    <p className="w-50">Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
                </div>
            </div>
        </section>
    )
}