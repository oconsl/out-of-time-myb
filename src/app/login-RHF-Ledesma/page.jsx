"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //Aqui va la funcion que manda los datos al backend
    console.log(data);
  };
  return (
    <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-blue-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-3 bg-white p-6 rounded shadow-md w-11/12 md:w-1/2"
      >
        <label className="block mb-2 text-gray-600">Usuario</label>
        <input
          type="text"
          name="username"
          {...register("username", {
            required: "Ingresa un nombre de usuario",
            maxLength: {
              value: 20,
              message: "Máximo 20 caracteres",
            },
          })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
        />
        <p className="text-red-500">{errors.username?.message}</p>

        <label className="block mt-4 mb-2 text-gray-600">Contraseña</label>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: "Ingresa tu contraseña",
            maxLength: {
              value: 16,
              message: "Máximo 16 caracteres",
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d).+$/,
              message:
                "La contraseña debe contener al menos una mayúscula y un número",
            },
          })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
        />
        <p className="text-red-500">{errors.password?.message}</p>

        <button className="w-full mt-6 bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200">
          Login
        </button>
        <Link
          href={"/sign-up"}
          className="block text-center mt-4 text-blue-500 hover:text-blue-600"
        >
          Registrarse
        </Link>
      </form>
      <aside className="me-3 hidden md:block w-1/2">
        <div className="h-full bg-gray-200 flex items-center justify-center">
          <p className="text-gray-600">video</p>
        </div>
      </aside>
    </section>
  );
}
