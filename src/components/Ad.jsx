export default function Ad(){

    return(
        <>
                <section className="bg-[#0E1A2B] container mx-auto min-w-full text-white font-bold mt-10 py-4 ">
                    <div className="grid grid-cols-2 items-center mx-20">
                        <div>
                            <h2 className="text-4xl w-2/3 py-5">Hold dig opdateret på salgsprocessen</h2>
                            <p>Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
                            <div className="flex gap-4 mt-4">
                                <div className="flex gap-1 flex-center bg-white p-3">
                                    <img src="src\assets\play-store.png" className="w-8 h-8" alt="" srcset="" />
                                    <button className="text-black text-lg">Google Play</button>
                                </div>
                                <div className="flex bg-[#0E1A2B] gap-1 border border-white p-3">
                                    <img className="color-black w-8 h-8" src="src\assets\apple.png" />
                                    <button className="text-white text-lg">Apple Store</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mb-10 relative">
                            <img src="src/assets/phone1.png" alt="" className="w-60 -mr-10" />
                            <img src="src/assets/phone2.png" alt="" className="w-60 -ml-10" />
                        </div>
                    </div>
                </section>
        </>
    )
}