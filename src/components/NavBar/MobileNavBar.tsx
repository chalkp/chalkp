import { usePathname } from 'next/navigation'
import React from 'react'

export default function MobileNavBar() {
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
    <>
      <h1>coming soon</h1>
    </>
  )
}
