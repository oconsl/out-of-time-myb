'use client'

import { useState } from 'react'

export default function ThemeSwitcher () {
  const [theme, setTheme] = useState('light')

  const handleThemeSwitch = () => {
    setTheme((theme) => theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      {
        theme === 'light'
          ? <button onClick={handleThemeSwitch}>🌙</button>
          : <button onClick={handleThemeSwitch}>☀️</button>
      }
    </div>
  )
}