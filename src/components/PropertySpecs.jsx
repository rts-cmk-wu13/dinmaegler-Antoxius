export default function PropertySpecs({ home }) {
    if (!home) return null;

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6 md:py-8">
            {/* 3 kolonner som på billedet */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Venstre kolonne */}
                <div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Sagsnummer:</span>
                        <span className="font-medium">{home.id || "-"}</span>
                    </div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Boligareal:</span>
                        <span className="font-medium">{home.livingspace ? `${home.livingspace} m²` : "-"}</span>
                    </div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Grundareal:</span>
                        <span className="font-medium">{home.lotsize ? `${home.lotsize} m²` : "-"}</span>
                    </div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Rum/værelser:</span>
                        <span className="font-medium">{home.rooms || "-"}</span>
                    </div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Antal Plan:</span>
                        <span className="font-medium">{home.plans || "-"}</span>
                    </div>
                </div>

                {/* Midter kolonne */}
                <div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Kælder:</span>
                        <span className="font-medium">{home.basementsize ? `${home.basementsize} m²` : "-"}</span>
                    </div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Byggeår:</span>
                        <span className="font-medium">{home.built || "-"}</span>
                    </div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Ombygget:</span>
                        <span className="font-medium">{home.remodel || "-"}</span>
                    </div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Energimærke</span>
                        <span className="font-medium">{home.energylabel || "-"}</span>
                    </div>
                </div>

                {/* Højre kolonne */}
                <div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Udbetaling:</span>
                        <span className="font-medium">{typeof home.payment === 'number' ? `Kr. ${home.payment.toLocaleString('da-DK')}` : '-'}</span>
                    </div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Brutto ex ejerudgift:</span>
                        <span className="font-medium">{typeof home.gross === 'number' ? `Kr. ${home.gross.toLocaleString('da-DK')}` : '-'}</span>
                    </div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Netto ex ejerudgift:</span>
                        <span className="font-medium">{typeof home.netto === 'number' ? `Kr. ${home.netto.toLocaleString('da-DK')}` : '-'}</span>
                    </div>
                    <div className="grid grid-cols-[auto,1fr] gap-x-8 py-1.5">
                        <span className="text-gray-700">Ejerudgifter:</span>
                        <span className="font-medium">{typeof home.cost === 'number' ? `Kr. ${home.cost.toLocaleString('da-DK')}` : '-'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}