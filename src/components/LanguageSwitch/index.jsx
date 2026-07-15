import React from 'react'
import './LanguageSwitch.css'
import { useLanguage } from '../../i18n'

const LanguageSwitch = () => {
  const { lang, setLang } = useLanguage()
  return (
    <div className="lang__switch" role="group" aria-label="Idioma / Language">
      <button
        className={`lang__option ${lang === 'es' ? 'active' : ''}`}
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
      <button
        className={`lang__option ${lang === 'en' ? 'active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitch
