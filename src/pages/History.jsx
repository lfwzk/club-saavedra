import Header from "../components/Header";
import Footer from "../components/Footer";

export const History = () => {
  return (
    <>
      <Header />

      <section className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 lg:h-screen ">
        <div className="px-4 py-20 mx-auto max-w-7xl">
          <div className="max-w-xl mx-auto">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                  Historia del club
                </div>
                <h1 className="text-5xl font-bold dark:text-white py-8">
                  {" "}
                  Nuestra <span className="text-[#D53443]"> Historia</span>{" "}
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
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
              <div className="inline-block p-4 mb-6 -mt-16 bg-red-400 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-abacus text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 3v18"></path>
                  <path d="M19 21v-18"></path>
                  <path d="M5 7h14"></path>
                  <path d="M5 15h14"></path>
                  <path d="M8 13v4"></path>
                  <path d="M11 13v4"></path>
                  <path d="M16 13v4"></path>
                  <path d="M14 5v4"></path>
                  <path d="M11 5v4"></path>
                  <path d="M8 5v4"></path>
                  <path d="M3 21h18"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold dark:text-white">
                {" "}
                OBJETIVOS{" "}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400">
                Fomentar, impulsar y promover la cultura física deportiva sana,
                en los niveles de formativo y competitivo.
              </p>
            </div>
            <div className="w-full p-8 mb-5 text-center transition-all bg-red-500 rounded shadow hover:shadow-lg">
              <div className="inline-block p-4 mb-6 -mt-16 bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-manual-gearbox"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M12 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M5 8l0 8"></path>
                  <path d="M12 8l0 8"></path>
                  <path d="M19 8v2a2 2 0 0 1 -2 2h-12"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {" "}
                MISION{" "}
              </h3>
              <p className="text-base text-gray-300">
                Formar, estimular en la disciplina de fútbol a la niñez y
                juventud, en el futbol base, futbol juvenil alejándolos de los
                riesgos de la delincuencia, el alcoholismo la drogadicción,
                siendo factor de prevención de enfermedades y promoción de salud
                mental.
              </p>
            </div>
            <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
              <div className="inline-block p-4 mb-6 -mt-16 bg-red-400 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-compass text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 16l2 -6l6 -2l-2 6l-6 2"></path>
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                  <path d="M12 3l0 2"></path>
                  <path d="M12 19l0 2"></path>
                  <path d="M3 12l2 0"></path>
                  <path d="M19 12l2 0"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold dark:text-white">
                {" "}
                VISIÓN{" "}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400">
                Ser una institucion reconocida por su compromiso social,
                descubriendo talentos natos e innatos deportivos, jóvenes que
                desean alcanzar sus metas y propósitos a nivel personal y
                profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
