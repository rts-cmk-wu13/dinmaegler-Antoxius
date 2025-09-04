export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      {/* Top content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div>
          {/* Left */}
            <section className="mb-6">
            <img
              src="src/assets/home_din_maegler.svg"
              alt="Din Mægler"
              className="mb-4"
              />
            <p className="text-gray-600 mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words.
            </p>
            </section>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-10">
                
            
          <section className="flex flex-col sm:flex-row gap-10 sm:gap-20">
           
            <div className="bg-white shadow-md p-6 sm:p-7 flex flex-col gap-6 max-w-xl">
            
              <div className="flex items-center gap-4">
                <img className="h-12 w-12" src="src\assets\phone-round-Icon.png" alt="" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Ring til os</p>
                  <p className="font-semibold text-gray-900 break-words">+45 7070 4000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img className="h-12 w-12" src="src\assets\mail-round-icon.png" alt="" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Send en mail</p>
                  <p className="font-semibold text-gray-900 break-words">4000@dinmaegler.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img className="h-12 w-12" src="src\assets\map-round-icon.png" alt="" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-gray-500">Butik</p>
                  <p className="font-semibold text-gray-900 break-words">
                    Stændertorvet 78, 4000 Roskilde
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                Din Mægler Roskilde, er din boligbutik i lokalområdet.
              </p>
            </div>
          </section>
          <section className="flex flex-col">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="grid grid-cols-1 gap-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="inline-block text-gray-700 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Boliger til salg
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-gray-700 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Mæglere
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-gray-700 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Kontakt os
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-gray-700 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Log ind / bliv bruger
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <p className="text-sm text-gray-500">Medlem af</p>
              <p className="text-3xl font-bold leading-tight">DMS</p>
              <p className="text-sm text-gray-500">Dansk Mægler Sammenslutning</p>
            </div>
          </section>
          </div>
        </div>
      </div>

      <div className="text-center bg-[#0E1A2B] py-6 text-white mt-10">
        Layout By Jit Banik 2020
      </div>
    </footer>
  );
}
