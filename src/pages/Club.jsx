import Header from "../components/Header";
import Footer from "../components/Footer";

export const Club = () => {
  return (
    <>
      <Header />

      <section className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 lg:h-screen ">
        <div className="px-4 py-20 mx-auto max-w-7xl">
          <div className="max-w-xl mx-auto">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                  Club Saavedra
                </div>

                <h1 className="text-5xl font-bold dark:text-white py-8">
                  {" "}
                  Nuestro <span className="text-[#D53443]"> Club</span>{" "}
                </h1>

                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-red-100"></div>
                  <div className="flex-1 h-2 bg-red-300"></div>
                  <div className="flex-1 h-2 bg-[#D53443]"></div>
                </div>
              </div>

              <p className="mb-16 text-base  text-white text-justify">
                EL Club paso por diversos nombres en sus inicios se llamaba
                escuela de futbol, luego academia de futbol y se quedó con
                nombre de Club Saavedra fundado el 22 de julio de 2011 por dos
                personas Alvaro Condori Garcia y Roberto Tapia Choque
                presentando un proyecto piloto a la zona Bautista Saavedra
                Unidad Vecinal “F” del Distrito 14 de la Cuidad de El Alto. La
                cancha de futbol en ese entonces era de tierra, cuando lluvia
                levantaba barro, rio y luego se construyó de Césped Sintético.
              </p>
            </div>
          </div>
        </div>
        \
      </section>

      <Footer />
    </>
  );
};
