import img1 from "../assets/ef-01.jpeg";
import img2 from "../assets/pb-01.jpeg";
import img3 from "../assets/club.jpeg";

const Mapview = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">
            SECCIONES{" "}
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-3 lg:py-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="group">
                  <a href="/escuela" className="block">
                    <img
                      src={img1}
                      alt=""
                      className="object-cover w-full  aspect-square rounded-md ransform transition duration-500 hover:scale-110"
                      href="/escuela"
                    />
                    <div className="mt-3">
                      <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">
                        Escuela de Futbol
                      </h3>
                    </div>
                  </a>
                </div>
                <div className="group">
                  <a href="/historia" className="block">
                    <img
                      src={img3}
                      alt=""
                      className="object-cover w-full  aspect-square rounded-md ransform transition duration-500 hover:scale-110"
                      href="/historia"
                    />
                    <div className="mt-3">
                      <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">
                        Historia
                      </h3>
                    </div>
                  </a>
                </div>
                <div className="group">
                  <a href="/club" className="block">
                    <img
                      src={img2}
                      alt=""
                      className="object-cover w-full  aspect-square rounded-md ransform transition duration-500 hover:scale-110"
                      href="/club"
                    />
                    <div className="mt-3">
                      <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">
                        Club Saavedra
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mapview;
