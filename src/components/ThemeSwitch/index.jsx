import React, { useEffect, useState } from 'react'
import './ThemeSwitch.css'
import { FiSun, FiMoon } from 'react-icons/fi'

const STORAGE_KEY = 'portfolio_theme'

const ThemeSwitch = () => {
  // El script inline de public/index.html ya aplicó data-theme antes del
  // primer paint (evita el flash); acá solo leemos ese estado inicial.
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (e) { /* localStorage no disponible — no rompe el toggle */ }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <button
      type="button"
      className="theme__switch"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={theme === 'dark'}
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  )
}

export default ThemeSwitch
