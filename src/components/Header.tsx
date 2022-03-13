import React from "react"
import { useRouter } from "next/router"

import PlainLink from "./PlainLink"
import PlainList from "./PlainList"

interface HeaderProps {
  siteTitle: string
}

const links = [
  {
    to: "/blog",
    label: "Blog",
  },
  { to: "/mixtape", label: "Mixtape" },
  {
    to: "/books",
    label: "Books",
  },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

const Header = ({ siteTitle }: HeaderProps) => {
  const location = useRouter().pathname
  return (
    <>
      <header className="header">
        <PlainLink href="/">
          <span>{siteTitle}</span>
        </PlainLink>
        <nav>
          <PlainList>
            {links.map(({ to, label }) => (
              <li key={to}>
                <PlainLink href={to}>
                  {label}
                  <span className="guide-icon">
                    {location.includes(to) ? " ◄" : ""}
                  </span>
                </PlainLink>
              </li>
            ))}
          </PlainList>
        </nav>
      </header>

      <style jsx>{`
        .header {
          position: sticky;
          display: flex;
          justify-content: space-between;
          width: 100%;
          z-index: 9999;
          font-family: "Source Serif Pro", Helvetica, sans-serif;
        }
        nav :global(ul) {
          display: flex;
          gap: 1em;
          margin-bottom: 2em;
          align-items: center;
        }
        .guide-icon {
          font-size: 0.65rem;
        }
      `}</style>
    </>
  )
}

export default Header
