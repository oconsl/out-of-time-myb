"use client";
import { useState, useEffect } from "react";
import Timer from "@/components/Timer";
import Image from "next/image";
import clock from "@/assets/OIG-transformed.webp";
import "@/app/globals.css";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("modalShown")) {
      setShowModal(true);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("modalShown", "true");
  };
  return (
    <main className="flex flex-col items-center justify-between">
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-50 bg-black">
          <div className="bg-opacity-40 bg-white p-6 rounded-lg shadow-lg backdrop-blur-md">
            <h2 className="text-xl font-semibold mb-4">
              ¡Bienvenido a "Out of Time"!
            </h2>
            <p className="mt-2 mb-4">
              Aquí puedes gestionar y maximizar tu tiempo de una manera
              innovadora y eficiente.
            </p>
            <p className="mt-2 mb-4">
              Para utilizar los timers, simplemente haz clic en "Iniciar" para
              comenzar la cuenta regresiva. Puedes pausar o reiniciar el timer
              según tus necesidades. ¡Descubre una nueva forma de ser
              productivo!
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
      <div className="relative w-full md:h-screen">
        <div className="absolute inset-0 bg-black opacity-50 z-5"></div>

        <div className="absolute inset-0 z-[-10] overlay-effect">
          <Image src={clock} alt="clock" layout="fill" objectFit="cover" />
        </div>
        <div className="relative inset-0 flex flex-col items-center justify-center z-10 m-16">
          <h1 className="text-4xl font-semibold text-center text-white my-6 md:text-6xl">
            Out of time
          </h1>
          <section>
            <p className="text-lg text-center text-white mb-10 md:text-2xl">
              La forma más eficiente de gestionar y maximizar tu tiempo para una
              vida más productiva y equilibrada.
            </p>
            <div className="flex flex-col justify-center items-center gap-12 md:flex-row">
              <Timer
                title="Comer"
                category="Salud"
                className="glass-effect bg-opacity-50 hover:scale-105 hover:opacity-90 transform transition-transform duration-500 ease-in-out"
              />

              <Timer
                title="Trabajar"
                category="Obligatorio"
                className="glass-effect bg-opacity-50 hover:scale-105 hover:opacity-90 transform transition-transform duration-500 ease-in-out"
              />
              <Timer
                title="Estudiar"
                category="Obligatorio"
                className="glass-effect bg-opacity-50 hover:scale-105 hover:opacity-90 transform transition-transform duration-500 ease-in-out"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
