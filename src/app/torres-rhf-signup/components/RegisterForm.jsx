"use client";

import { useForm } from "react-hook-form";

import ErrorMessage from "@/app/torres-rhf-signup/components/ErrorMessage";

export default function RegisterForm({ inputs }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const validation = {
    Email: {
      ...register("Email", {
        required: { value: true, message: "The field Email is required" },
        maxLength: {
          value: 80,
          message: "The field email must have a maximum of 80 characters ",
        },
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "The email is not valid",
        },
      }),
    },
    Password: {
      ...register("Password", {
        required: { value: true, message: "The field password is required" },
        minLength: {
          value: 8,
          message: "The password must have a minimum of 8 characters",
        },
        maxLength: {
          value: 16,
          message: "The password must have a maximum of 16 characters",
        },
        pattern: {
          value:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]{8,16}$/,
          message: " 1 upper case, 1 lower case, 1 special character '#$.@,'",
        },
      }),
    },
    Username: {
      ...register("Username", {
        required: {
          value: true,
          message: "The field username is mandatory",
        },
        minLength: {
          value: 4,
          message: "The username must have a minimum of 4 characters",
        },
        maxLength: {
          value: 20,
          message: "The username must have a maximum of 20 characters",
        },
        pattern: {
          value: /^[A-Za-z0-9]{3,20}$/,
          message: "The username must contain only letters and/or numbers",
        },
      }),
    },
    confirmPassword: {
      ...register("confirmPassword", {
        required: {
          value: true,
          message: "The field confirm password is required",
        },
        minLength: {
          value: 8,
          message: "The password must have a minimum of 8 characters",
        },
        maxLength: {
          value: 16,
          message: "The password must have a maximum of 16 characters",
        },
        validate: (value) => {
          if (value === watch("Password")) {
            return true;
          }
          if (value !== watch("Password")) {
            return "Passwords do not match";
          }
        },
      }),
    },
  };

  const handleValidate = (inputName) => {
    return validation[inputName];
  };

  console.log(Object.keys(errors));

  return (
    <section className="absolute right-0 left-0 top-28 p-4 lg:bg-[#242839]  lg:bg-opacity-30 rounded-lg lg:ml-6 lg:w-1/3">
      <h1 className="text-white text-3xl text-center font-bold mb-4 ">
        Sign Up
      </h1>
      <form
        noValidate
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col items-center justify-center"
      >
        {inputs.map((input) => {
          const error = errors[input.name];
          return (
            <div
              key={input.name}
              className="relative sm:w-3/4 md:w-1/2 lg:w-4/5 mb-4"
            >
              <label htmlFor={input.type} className="block">
                {input.name}
              </label>
              <input
                {...handleValidate(input.name)}
                type={input.type}
                id={input.id ? input.id : input.type}
                placeholder={input.example}
                className={`rounded-md  text-gray-950 p-1 sm:w-3/4 lg:w-full ${
                  error ? "border-red-700 border-[2px]" : null
                }`}
              />

              {error ? <ErrorMessage message={error.message} /> : null}
            </div>
          );
        })}

        <button className="bg-[#ba8d8a] hover:bg-[#cfb8b7] text-white p-2 rounded-md">
          Sign Up
        </button>
      </form>
    </section>
  );
}
