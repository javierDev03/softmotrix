import React from "react";
import Element3d from "../components/Element3d";
import Services from "../components/Services";
import CardsSocial from "../components/CardsSocial";

export default function Home() {
  return (
    <>
      <section className="flex justify-center items-center mt-[130px]">
        <div className=" text-center w-1/2 p-4">
          <h1 className=" md:text-8xl md:justify-center md:flex lg:text-9xl text-4xl font-bold ">
            SoftMotrix
          </h1>
          <p className=" p-4">Desarrollo web a medida!</p>
          <button className="border rounded-md p-2 bg-black text-white w-44 hover:bg-neutral-900">
            Contactanos
          </button>
        </div>

        <div className="w-1/2 h-[600px] overflow-hidden lg:block hidden p-4 md:min-w-88">
          <Element3d />
        </div>
      </section>

      <section className="mt-[235px] relative">
        <h2 className="flex justify-center font-bold text-5xl p-10">
          Sobre Nosotros
        </h2>
        <div className="flex justify-center  items-center">
          <div className=" shadow-md m-[25px] bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-sm bg-opacity-10 saturate-100 backdrop-contrast-100">
            <p className="  p-8 text-lg max-w-[700px] ">
              En Softmotrix, somos un equipo diverso y apasionado que se dedica
              a la excelencia y la innovación en el mundo digital. Valoramos
              nuestra diversidad como una fortaleza que nos permite abordar
              desafíos de manera creativa y encontrar soluciones excepcionales
              para nuestros clientes. Nos esforzamos por superar expectativas,
              manteniéndonos siempre a la vanguardia de la industria y creando
              experiencias digitales que transforman la interacción en línea.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-[300px]">
        <h2 className="flex justify-center font-bold text-5xl p-10">
          Servicios
        </h2>
        <div className="flex justify-center p-2 gap-5 ">
          <Services />
        </div>
      </section>

      <section className="flex flex-col justify-center pl-4 pt-[20px]">
        <div className="w-full ">
          <CardsSocial />
        </div>
      </section>

      <footer className=" pt-48">
        <p className="flex justify-center p-2 text-sm">
          Power By Javier Cervantes
        </p>
      </footer>
    </>
  );
}
