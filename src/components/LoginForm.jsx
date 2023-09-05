"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

function LoginForm() {
  const backgroundImage =
    "https://res.cloudinary.com/ddyk63iig/image/upload/v1692197317/9485ab7c0e4308202c542d9a61d52a98_rbuxa8.jpg";
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      username: formData.username,
      password: formData.password,
    };
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setIsLoading(false);
        if (!response.ok) {
          throw new Error("Algo salio mal");
        }
        return response.json();
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  };
  return (
    <section className="flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 min-h-screen h-full  w-full max-w-screen">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full ">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap ">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12 ">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-16 mb-5"
                        src="https://res.cloudinary.com/ddyk63iig/image/upload/v1692197975/timer_hourglass_time_clock_icon_124605_svf1aj.png"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-3xl font-bold text-pink-500 ">
                        Bienvenido a Out Of Time
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit} className="">
                      <p className="mb-4 flex justify-center items-center font-semibold ">
                        Porfavor inicia sesión con tu cuenta
                      </p>
                      {/* <!--Username input--> */}
                      <label className="flex flex-col mb-4">
                        Usuario
                        <input
                          type="text"
                          name="username"
                          className="text-black"
                          value={formData.username}
                          onChange={(e) =>
                            setFormData(e.target.value, "username")
                          }
                        />
                      </label>
                      {/* <!--Password input--> */}
                      <label className="flex flex-col mb-4">
                        Contraseña
                        <input
                          type="password"
                          name="password"
                          className="text-black"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData(e.target.value, "password")
                          }
                        />
                      </label>
                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          {isLoading ? "Cargando..." : "Iniciar Sesion"}
                        </button>

                        {/* <!--Forgot password link--> */}
                        <Link href="/sign-up">Olvidaste tu contraseña?</Link>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0">No tenes cuenta?</p>

                        <button
                          type="button"
                          className="inline-block rounded  px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Registrate Aqui
                        </button>
                      </div>
                    </form>
                    {error && <p className="text-red-500">{error}</p>}
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
