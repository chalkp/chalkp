"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import MobileNavBar from "./MobileNavBar";
import Lang from "./Lang";

export default function NavBar() {
  const current = usePathname();
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
      href: "/contact",
      label: "contact"
    }
  ]

  return (
    <header className="py-7 bg-bkk-green text-bkk-background-white font-bold"> {/* looks better when resize */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl">chalkp</h1>
        </Link>
        <div className="hidden xl:flex items-center">
          <nav className="flex gap-8">
            <div className="flex text-xl gap-8">
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
            </div>
            <Lang />
          </nav>
        </div>
        <div className="xl:hidden">
          <MobileNavBar />
        </div>
      </div>
    </header>
  )
}
