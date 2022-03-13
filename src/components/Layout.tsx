import { ReactNode } from "react"

import siteConfig from "@/data/siteconfig.json"
import Header from "./Header"
import Metatags from "./Metatags"
import utilStyles from "@/styles/utils.module.css"

type LayoutProps = {
  children: ReactNode
  title?: string
}

const Content = ({ title, children }: LayoutProps) => {
  const site = siteConfig

  return (
    <>
      <div className="container">
        <Metatags title={title} />
        <Header siteTitle={site.title} />
        <main>
          <h1 className={utilStyles.pageHeader}>{title}</h1>
          {children}
        </main>
      </div>
      <style jsx>{`
        .container {
          max-width: 55rem;
          padding: 0 1rem;
          margin: 2em auto;
        }
      `}</style>
    </>
  )
}

export default function Layout({ children, title }: LayoutProps) {
  return <Content title={title}>{children}</Content>
}
