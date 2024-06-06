"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import MobileNavBar from "./MobileNavBar";

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
    },
    {
      href: "https://github.com/chalkp",
      label: "github"
    }
  ]
  return (
    <header className="py-7 xl:py12 bg-bkk-green text-white font-bold font-saochingcha"> {/* looks better when resize */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl">chalkp</h1>
        </Link>
        <div className="hidden xl:flex">
          <nav className="flex gap-6">
            { navBarItems.map(({ href, label }, index) => (
              <Link key={index} href={href} className={`border-bkk-accent ${(href === current)? "border-b-4": "hover:border-b-2"}`}>
                <span className="text-2xl">
                  {label}
                </span>
              </Link>
              ))
            }
          </nav>
        </div>
        <div className="xl:hidden">
          <MobileNavBar />
        </div>
      </div>
    </header>
  )
}