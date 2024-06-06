import Link from "next/link"

export default function NavBar() {

  const navBarItems = [
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
  // i have absolutely no fucking idea what am i doing here, im a css noob
  return (
    <div className="bg-bkk-green h-24 w-full shadow-md">
      <div className="px-40 h-full flex flex-wrap items-center">
        <Link href="/" className="text-white text-4xl font-bold font-saochingcha px-6 lg:w-4/6">
          <span>chalkp</span>
        </Link>

        <div className="lg:px-12 px-3 lg:w-1/4 w-1/2 space-x-2 lg:space-x-8 self-center">
          { navBarItems.map(({ href, label }) => (
              <Link href={href}>
                <span className="text-white text-2xl font-bold font-saochingcha">
                  {label}
                </span>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}