import { useLoaderData } from "react-router";
import { Link } from "react-router";
import Sort from "../components/Sort";
const colors = {
    A: 'bg-green-500',
    B: 'bg-yellow-400',
    C: 'bg-orange-400',
    D: 'bg-red-500'
};


export default function Property_List(){
    const homes = useLoaderData();
    console.log(homes);
    return(
        <>
        <div className="relative w-full  flex items-center justify-center">
          <img src="src/assets/Boliger.jpg" alt="Boliger til salg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 color-overlay"></div>
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">Boliger til salg</h2>
        </div>
        <Sort homes={homes} />
    <div className="container mx-auto my-10 px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {
            homes.map(home => (
                <Link key={home.id} to={`/property-list/${home.id}`} className="block">
                    <article className="my-10 shadow-md hover:shadow-lg transition-shadow duration-200">
                        <img src={home.images[0].url} alt={home.title} className="w-full rounded-t-lg h-75 object-cover mb-4" />
                        <div className="p-4 flex flex-col gap-2">
                            <h2 className="font-bold text-lg">{home.adress1} {home.adress2}</h2>
                            <p>{home.postalcode} {home.city}</p>
                            <div className="flex gap-2">
                                <p className="font-bold">{home.type}</p>
                                <p>•</p>
                                <p>Ejerudgift: {home.price.toLocaleString('da-DK')} kr.</p>
                            </div>
                            <br className="border-black border-b-2" />
                        </div>
                        <div className="p-4 flex gap-3  items-center">
                            <p className={`px-2 text-white ${colors[home.energylabel]}`}>{home.energylabel}</p>
                            <p className="font-bold text-xl">{home.price.toLocaleString('da-DK')} kr.</p>
                        </div>
                    </article>
                </Link>
            ))
        }
            </div>
        </div>
        </>
    )
}