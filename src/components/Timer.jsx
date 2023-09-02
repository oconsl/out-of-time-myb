"use client";

import { useState, useEffect} from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
// import heroImage from "@/assets/futbol.png";
// import heroImage1 from './futbol.png'


const ONE_SECOND_IN_MS = 1000;

export default function Timer({ title, category, className }) {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // const heroImage1= `/${title}.png`
  // console.log(heroImage1);
  

  // console.log(title);

  useEffect(() => {
    let timerInterval;

    if (isRunning) {
      timerInterval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, ONE_SECOND_IN_MS);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning]);

  const handleClick = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <button
      className={cn("bg-red-400 rounded-md p-2", className)}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <p>{timer}</p>
      <span className={cn("bg-red-500 rounded-md p-2", className)}>
        {category}
      </span>
      <Image
        className="mt-5 mb-5"
        src={`/images/${title}.png`}
        width={600}
        height={600}
        alt="svg icon"
      />
    </button>
  );
}
