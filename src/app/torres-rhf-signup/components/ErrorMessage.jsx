'use client'
import React, { useState,useEffect } from "react";



function ErrorMessage({ message }) {
    const [isHovered, setIsHovered] = useState(false)
    const [navMobile, setNavMobile] = useState(false);
  // Manejo del menu movil
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        
        setNavMobile(false);
      }
      if(window.innerWidth<=640){
        setNavMobile(true)
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
   <div className={`text-center ${navMobile? 'top-7 right-1':null} absolute lg:top-[1.90rem] lg:right-2 sm:top-7  sm:right-16 md:top-7 md:right-16 `} onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}>
    <div className={`bg-red-100 ${isHovered?'z-50':null} rounded`}><span className={`bg-red-100 text-center text-red-600 text-xs font-medium transition-all ${isHovered?'z-50':null} px-2.5 py-0.5 rounded`}>
      {isHovered?`❌ ${message}`:'❌'}
    </span></div>
    
  </div>
  );
}

export default ErrorMessage;