'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/utils/cn'

const ONE_SECOND_IN_MS = 1000

export default function Timer({ title, category, className }) {
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timerInterval

    if (isRunning) {
      timerInterval = setInterval(() => {
        setTimer((prev) => prev + 1)
      }, ONE_SECOND_IN_MS)
    } else {
      clearInterval(timerInterval)
    }

    return () => clearInterval(timerInterval)
  }, [isRunning])

  const handleClick = () => {
    setIsRunning((prev) => !prev)
  }

  const formatTime = timer => {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <button className={cn('bg-red-400 rounded-md p-2', className)} onClick={handleClick}>
      <h3>{title}</h3>
      <p>{formatTime(timer)}</p>
      <span className={cn('bg-red-500 rounded-md p-2', className)}>{category}</span>
      <img className='w-10 h-10' src="https://images.vexels.com/media/users/3/140908/isolated/lists/bdc30bbe3c022a11e2d7fd0e642c61ae-icono-de-libro-abierto.png" alt='svg icon' />
    </button>
  )
}