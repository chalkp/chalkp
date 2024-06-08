"use client"
import i18n from "@/i18n"
import { useState } from "react"
import Image from "next/image"

export default function Lang() {
  const [language, setLanguage] = useState(i18n.language);

  function changeLanguage() {
    if (language == 'th') {
      i18n.changeLanguage('en')
      setLanguage('en')
    } else {
      i18n.changeLanguage('th')
      setLanguage('th')
    }
  }
  return (
    <div className="relative">
      <button type="button" onClick={() => changeLanguage()}>
        <span className="flex justify-center text-xl h-6">
          <Image src={(language == 'th')? "/assets/flags/en.svg": "/assets/flags/th.svg"} alt={`lang-${language}`}/>
        </span>
      </button>
    </div>
  )
}
