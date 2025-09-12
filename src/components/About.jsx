export default function About(){

    return(
        <div className="container mx-auto px-auto my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative h-100 bg-gradient-to-br from-blue-50 via-white to-white p-6">
                    <div className="absolute h-[90%] w-[90%] top-0 left-0">
                        <img className="w-full h-full object-cover" src="src/assets/family-moving-using-boxes 1.png" alt="" />
                    </div>
                    <div className="absolute h-[90%] w-[90%] bottom-0 right-0 border-8 border-[#0E1A2B]"> 
                        <p className="bg-[#0E1A2B] text-white w-min p-5 absolute bottom-0 right-0 text-center text-lg"><span className="text-3xl font-bold">38+</span> års&nbsp;mægler-erfaring</p>
                    </div>
                </div>
                <div className="bg-white p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold">Vi har fulgt danskerne hjem i snart 4 årtier</h2>
                    <h3 className="text-xl">Det synes vi siger noget om os!</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <article className=" flex justify-around items-center">
                        <div className="flex gap-2 pt-5 my-auto w-1/2">
                            <img src="src/assets/house2.png" alt="" className="w-12 h-12 p-1.5 bg-blue-100" />
                            <div>
                                <p className="font-bold">4829</p>
                                <p>boliger solgt</p>
                            </div>
                        </div>
                        <div className="flex gap-2 pt-5 my-auto w-1/2">
                            <img src="src/assets/house1.png" alt="" className="w-12 h-12 p-1.5 bg-blue-100" />
                            <div>
                                <p className="font-bold">158</p>
                                <p>boliger til salg</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}