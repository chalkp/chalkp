"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Lang from "./Lang"
import { MdClose, MdMenu } from "react-icons/md"

const navBarItems = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/about",
    label: "about",
  },
  {
    href: "/works",
    label: "works"
  },
  {
    href: "/maimai",
    label: "maimai"
  },
  {
    href: "/contact",
    label: "contact"
  }
]

export default function Navigation() {
  const current = usePathname();
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* desktop */}
      <div className="hidden xl:flex items-center">
        <nav className="flex text-xl gap-8">
          { navBarItems.map(({ href, label }, index) => (
            <Link
              key={index}
              href={href}
              className={`border-bkk-accent
                ${(href === current)? "border-b-4": "hover:border-b-2"}`}>
              <span>
                {label}
              </span>
            </Link>
            ))
          }
          <Lang />
        </nav>
      </div>

      {/* mobile */}
      <div className="xl:hidden">
        <div className='text-4xl'>
          <MdMenu onClick={() => setOpen(true)} className={open? 'hidden':''}/>
        </div>
        <div className={`top-0 right-0 h-full w-3/4 max-w-sm z-50 bg-bkk-green shadow-2xl fixed ease-in-out duration-300 ${
          open ? 'animate-in fade-in-0 slide-in-from-right' : 'translate-x-full'
        }`}>
          <div className='container py-7 px-4 flex justify-between'> {/* just to make X align with menu bar */}
            <span></span>
            <MdClose onClick={() => setOpen(false)} className='text-4xl text-bkk-accent'/>
          </div>
          <Link href="/" className='mt-20 flex justify-center'>
            <h1 className="text-4xl">chalkp</h1>
          </Link>
          <nav className='mt-40 flex flex-col justify-center items-center text-xl gap-8'>
            { navBarItems.map(({ href, label }, index) => (
              <Link
                key={index}
                href={href}
                onClick={() => setOpen(false)}
                className={`border-bkk-accent hover:text-bkk-accent
                  ${(href === current)? "border-b-4 text-bkk-accent": ""}`}>
                <span>
                  {label}
                </span>
              </Link>
              ))
            }
            <Lang />
          </nav>
        </div>
      </div>
    </>
  )
}
