'use client'

import { useLanguage } from './LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
      className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center font-semibold text-sm"
      aria-label="Toggle language"
    >
      {language.toUpperCase()}
    </button>
  )
}
