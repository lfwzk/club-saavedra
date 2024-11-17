import Header from "../components/Header";
import Footer from "../components/Footer";

export const School = () => {
  return (
    <>
      <Header />

      <section className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 lg:h-screen ">
        <div className="px-4 py-20 mx-auto max-w-7xl">
          <div className="max-w-xl mx-auto">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                  Escuela de Futbol
                </div>
                <h1 className="text-5xl font-bold dark:text-white py-8">
                  {" "}
                  Nuestra{" "}
                  <span className="text-[#D53443]">
                    {" "}
                    Escuela de Futbol
                  </span>{" "}
                </h1>
                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-red-100"></div>
                  <div className="flex-1 h-2 bg-red-300"></div>
                  <div className="flex-1 h-2 bg-[#D53443]"></div>
                </div>
              </div>
              <p className="mb-16 text-base  text-white text-justify">
                La escuela de futbol del Club Saavedra es una de las mejores de
                la ciudad de El Alto, con profesores capacitados y con una
                infraestructura de primer nivel. Los niños y niñas que forman
                parte de la escuela de futbol tienen la oportunidad de
                desarrollar sus habilidades futbolisticas y de aprender valores
                como el compañerismo y la disciplina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
