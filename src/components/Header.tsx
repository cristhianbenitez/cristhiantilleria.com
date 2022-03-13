import React from "react"
import { useRouter } from "next/router"

import PlainLink from "./PlainLink"
import PlainList from "./PlanList"

interface HeaderProps {
  siteTitle: string
}

const links = [
  {
    to: "/blog",
    label: "Blog",
  },
  {
    to: "/projects",
    label: "Projects",
  },
  { to: "/mixtape", label: "Mixtape" },
  {
    to: "/books",
    label: "Books",
  },
  { to: "/about", label: "About" },
]

const Header = ({ siteTitle }: HeaderProps) => {
  const location = useRouter().pathname
  return (
    <>
      <header>
        <PlainLink href="/">{siteTitle}</PlainLink>
        <nav>
          <PlainList>
            {links.map(({ to, label }) => (
              <li key={to}>
                <PlainLink href={to}>
                  {label}
                  {location.includes(to) ? " ◄" : ""}
                </PlainLink>
              </li>
            ))}
          </PlainList>
        </nav>
      </header>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        nav :global(ul) {
          display: flex;
          gap: 1em;
          margin-bottom: 2em;
        }
      `}</style>
    </>
  )
}

export default Header
