export default function Search(){

    return(
        <div className="relative w-full flex items-center justify-center">
          <input type="text" placeholder="Søg efter boliger..." className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg" />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-lg px-4 py-2">Søg</button>
        </div>
    )
}