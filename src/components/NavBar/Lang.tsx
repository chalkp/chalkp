"use client"
import i18n from "@/i18n"
import { useState } from "react"
import Image from "next/image"

export default function Lang() {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = () => {
    if (language == 'th') {
      i18n.changeLanguage('en')
      setLanguage('en')
    } else {
      i18n.changeLanguage('th')
      setLanguage('th')
    }
  }
  return (
    <div className="relative ml-1">
      <span className="flex justify-center text-xl" onClick={changeLanguage}>
        <Image
          src={(language == 'th')? "/assets/flags/en.svg": "/assets/flags/th.svg"}
          alt={`lang-${language}`}
          height={30}
          width={30} />
      </span>
    </div>
  )
}
