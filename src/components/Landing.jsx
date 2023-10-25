import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../public/favicon.ico";
import Mapview from "./Map";
// import { Enterprises } from "./Enterprises";
// import { ProductItem } from "./ProductItem";
import Footer from "./Footer";

export const Landing = () => {
  return (
    <>
      <Header />

      <main className="bg-virtus  text white">
        <FloatingWhatsApp
          phoneNumber="77558878"
          accountName="Club Saavedra"
          avatar={logo}
          darkMode={true}
          chatMessage="bienvenido en que puedo ayudarte"
          allowClickAway={true}
          allowEsc={true}
          position="right"
          statusMessage="Online"
          profilePicture={logo}
          width={100}
          height={100}
          notification={true}
          notificationSound={true}
          showAlways={true}
          popupMessage="hola bienvenido en que puedo ayudarte"
          popupTitle="Club Saavedra"
          time={0}
          zIndex={999}
        />

        <Hero />
        {/*<Enterprises />
        <ProductItem /> */}
        <Mapview />
      </main>
      <Footer />
    </>
  );
};
