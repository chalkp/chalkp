"use client"
import Link from "next/link"
import Navigation from "./Navigation"

export default function NavBar() {

  return (
    <header className="py-7 bg-bkk-green text-bkk-background-white font-bold"> {/* looks better when resize */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl">chalkp</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  )
}
