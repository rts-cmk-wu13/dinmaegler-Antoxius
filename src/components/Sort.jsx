import React from "react";
import { Range } from 'react-range';

export default function Sort({ homes }){

    // State for dual sliders
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(12000000);
    const minGap = 100000;

    // Ensure sliders don't cross
    const handleMinChange = (e) => {
        const value = Number(e.target.value);
        if (value <= maxPrice - minGap) setMinPrice(value);
        else setMinPrice(maxPrice - minGap);
    };
    const handleMaxChange = (e) => {
        const value = Number(e.target.value);
        if (value >= minPrice + minGap) setMaxPrice(value);
        else setMaxPrice(minPrice + minGap);
    };

    return (
        <section className="container mx-auto my-10 px-4 md:px-8 lg:px-16">
            <h2 className="mb-2 text-xl font-semibold border-b-4 border-[#0E1A2B] w-fit pb-1">Søg efter dit drømmehus</h2>
            <form className="flex flex-col md:flex-row gap-4 md:gap-6 items-end" role="search" aria-label="Boligsøgning">
                <div className="flex-1 flex flex-col">
                    <label htmlFor="propertyType" className="mb-1 text-sm font-medium text-gray-700">Ejendomstype</label>
                    <div className="relative">
                        <select id="propertyType" name="propertyType" className="w-full h-12 border border-gray-300 rounded-lg pl-4 pr-10 appearance-none" aria-label="Vælg ejendomstype">
                            <option value="">Ejendomstype</option>
                            <option value="villa">Villa</option>
                            <option value="ejerlejlighed">Ejerlejlighed</option>
                            <option value="rækkehus">Rækkehus</option>
                            <option value="andelsbolig">Andelsbolig</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/4">
                    <label htmlFor="priceRange" className="font-medium text-gray-700">Pris-interval</label>
                    <div className="relative w-full flex flex-col justify-center">
                        <Range
                            values={[minPrice, maxPrice]}
                            step={minGap}
                            min={0}
                            max={12000000}
                            onChange={setValues => {
                                setMinPrice(setValues[0]);
                                setMaxPrice(setValues[1]);
                            }}
                            renderTrack={({ props, children }) => (
                                <div
                                    {...props}
                                    className="w-full h-4 flex items-center"
                                >
                                    <div className="w-full bg-gray-200 relative h-1 rounded">
                                        <div
                                            className="absolute h-1 bg-[#0E1A2B] rounded"
                                            style={{
                                                left: `${(minPrice / 12000000) * 100}%`,
                                                width: `${((maxPrice - minPrice) / 12000000) * 100}%`
                                            }}
                                        ></div>
                                    </div>
                                    {children}
                                </div>
                            )}
                            renderThumb={({ props, index }) => (
                                <div
                                    {...props}
                                    className="w-5 h-5 bg-white border-2 border-[#0E1A2B] rounded-full flex items-center justify-center shadow cursor-pointer"
                                >
                                    <span className="block w-2 h-2 bg-[#0E1A2B] rounded-full"></span>
                                </div>
                            )}
                        />
                        <div className="flex justify-between w-full mt-2">
                            <span className="text-xs text-[#0E1A2B] font-bold">{minPrice.toLocaleString('da-DK')} kr.</span>
                            <span className="text-xs text-[#0E1A2B] font-bold">{maxPrice.toLocaleString('da-DK')} kr.</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-8">
                        <span>0 kr.</span>
                        <span>12.000.000 kr.</span>
                    </div>
                </div>
            </form>
        </section>
    );
}