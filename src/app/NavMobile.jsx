"use client";
import React, { useState } from 'react';
/* import { FaHourglass } from 'react-icons/fa'; */

function NavMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        className={`  p-2 w-8`}
        onClick={toggleMenu}
      >
        {/* <FaHourglass size={20} /> */}
        ⌛
      </button>
      {menuOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen backdrop-blur-lg">
          
        </div>
      )}
      <div
        className={`fixed top-0 left-0 h-screen w-1/2  text-white p-4 transition-opacity ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="space-y-4">
          <li
            className={`transform transition-transform duration-500 ease-in-out ${
              menuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <a href="/">Inicio</a>
          </li>
          <li
            className={`transform transition-transform duration-500 ease-in-out ${
              menuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <a href="/login">Iniciar sesión</a>
          </li>
          <li
            className={`transform transition-transform duration-500 ease-in-out ${
              menuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <a href="/sign-up">Registrarse</a>
          </li>
        </ul>
        {menuOpen && (
          <button
            className="text-white mt-4 py-2 px-4 "
            onClick={closeMenu}
          >
            Cerrar
          </button>
        )}
      </div>
    </div>
  );
}

export default NavMobile;