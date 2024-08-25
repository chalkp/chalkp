"use client"
import Link from "next/link"
import Navigation from "./Navigation"
import { useState } from "react"

export default function NavBar() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count+1)
  }

  return (
    <header className="py-7 bg-gradient-to-r font-bold
      from-bkk-green from-10% via-bkk-green-nid-nid via-50% to-bkk-green to-90% text-bkk-background-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" onClick={incrementCount} className="flex">
          <h1 className="text-4xl">
            {count < 50? 'chalkp': (count < 100 ? 'chalkpoomsetong' : 'chill, motherfucker...')}
          </h1>
          <h6 className="mx-2 mt-3">beta</h6>
        </Link>
        <Navigation />
      </div>
    </header>
  )
}
