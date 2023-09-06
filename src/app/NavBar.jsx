import React from "react";
import Link from "next/link";
import NavMobile from "./NavMobile";

function Navbar() {
  return (
    <nav className=" p-4">
      <NavMobile />

      <div className="flex justify-between items-center">
        <ul className="hidden lg:flex space-x-4 text-white">
          <li>
            <Link href="/">Inicio</Link>
          </li>
        </ul>
        <ul className="hidden lg:flex space-x-4 text-white">
          <li>
            <Link href="/login">Iniciar sesión</Link>
          </li>
          <li>
            <Link href="/sign-up">Registrarse</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
