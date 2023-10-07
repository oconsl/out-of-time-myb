'use client'
import { useState, useEffect } from 'react'
import { cn } from '@/utils/cn'

// Definimos una constante para un segundo en milisegundos.
const ONE_SECOND_IN_MS = 1000

// Componente Timer
export default function Timer({ title, category, className }) {
  // Declaramos el estado para contar los segundos.
  const [seconds, setSeconds] = useState(0)
  // Declaramos el estado para saber si el temporizador está funcionando.
  const [isRunning, setIsRunning] = useState(false)

  // Utilizamos useEffect para manejar el intervalo de tiempo.
  useEffect(() => {
    let timerInterval

    if (isRunning) {
      timerInterval = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, ONE_SECOND_IN_MS)
    } else {
      clearInterval(timerInterval)
    }

    return () => clearInterval(timerInterval)
  }, [isRunning])

  // Función para manejar el clic en el botón de inicio/parada.
  const handleToggle = () => {
    setIsRunning((prev) => !prev)
  }

  // Función para manejar el clic en el botón de reinicio.
  const handleReset = () => {
    setSeconds(0)
  }


  // Función para formatear el tiempo en el formato HH:MM:SS
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600) // Calculamos las horas.
    const minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60) // Calculamos los minutos.
    const seconds = timeInSeconds - (hours * 3600) - (minutes * 60) // Calculamos los segundos.

    // Rellenamos con ceros a la izquierda si es necesario.
    const paddedHours = String(hours).padStart(2, '0')
    const paddedMinutes = String(minutes).padStart(2, '0')
    const paddedSeconds = String(seconds).padStart(2, '0')

    // Devolvemos el tiempo formateado.
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
  }

  // Renderizamos el componente.
 return (
    <div className={cn('bg-white p-8 rounded-lg shadow-lg w-64', className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">{category}</span>
      </div>
      <div className="flex justify-center items-center mb-4">
        <p className="text-4xl font-bold">{formatTime(seconds)}</p>
      </div>
      <div className="flex justify-center items-center mb-4">
        <img className="w-10 h-10" src="https://images.vexels.com/media/users/3/140908/isolated/lists/bdc30bbe3c022a11e2d7fd0e642c61ae-icono-de-libro-abierto.png" alt="svg icon" />
      </div>
      <div className="flex justify-around">
        <button className="bg-red-400 text-white rounded-full px-4 py-2" onClick={handleToggle}>
          {isRunning ? 'Parar' : 'Iniciar'}
        </button>
        <button className="bg-blue-400 text-white rounded-full px-4 py-2" onClick={handleReset}>
          Reiniciar
        </button>
      </div>
    </div>
  )
}


// 'use client'
// import { useState, useEffect } from 'react'
// import { cn } from '@/utils/cn'

// const ONE_SECOND_IN_MS = 1000

// export default function Timer ({ title, category, className }) {
//   const [timer, setTimer] = useState(0)
//   const [isRunning, setIsRunning] = useState(false)

//   useEffect(() => {
//     let timerInterval

//     if (isRunning) {
//       timerInterval = setInterval(() => {
//         setTimer((prev) => prev + 1)
//       }, ONE_SECOND_IN_MS)
//     } else {
//       clearInterval(timerInterval)
//     }

//     return () => clearInterval(timerInterval)
//   }, [isRunning])

//   const handleClick = () => {
//     setIsRunning((prev) => !prev)
//   }

//   return (
//     <button className={cn('bg-red-400 rounded-md p-2', className)} onClick={handleClick}>
//       <h3>{title}</h3>
//       <p>{timer}</p>
//       <span className={cn('bg-red-500 rounded-md p-2', className)}>{category}</span>
//       <img className='w-10 h-10' src="https://images.vexels.com/media/users/3/140908/isolated/lists/bdc30bbe3c022a11e2d7fd0e642c61ae-icono-de-libro-abierto.png" alt='svg icon' />
//     </button>
//   )
// }