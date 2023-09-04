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
    console.log(data)
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Usuario
          <input
            type="text"
            name="username"
            {...register("username", {
              required: "Ingresa un nombre de usuario",
              maxLength: {
                value: 20,
                message: "Maximo 20 caracteres!",
              },
            })}
          />
          <p className="text-danger">{errors.username?.message}</p>
        </label>
        <label>
          Contraseña
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Ingrese su contraseña",
              maxLength: {
                value: 16,
                message: "Maximo 16 caracteres",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).+$/,
                message:
                  "La contraseña debe contener al menos una mayuscula y un numero",
              },
            })}
          />
          <p className="text-danger">{errors.password?.message}</p>
        </label>
        <button>Login</button>
        <Link href={"/sign-up"}>Registrarse</Link>
      </form>
      <section>
        <p>video</p>
      </section>
    </>
  );
}
