'use client'

import { useState } from 'react'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light')

  const handleThemeSwitch = () => {
    setTheme((theme) => theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="fixed top-4 right-4">
      {theme === 'light'
        ? <button onClick={handleThemeSwitch} className="bg-gray-800 p-1 rounded-full focus:outline-none">🌙</button>
        : <button onClick={handleThemeSwitch} className="bg-gray-200 p-1 rounded-full focus:outline-none">☀️</button>
      }
    </div>
  )
}
