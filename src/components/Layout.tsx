import { ReactNode } from "react"

import siteConfig from "@/data/siteconfig.json"
import Header from "./Header"
import Metatags from "./Metatags"
import utilStyles from "@/styles/utils.module.css"

type LayoutProps = {
  children: ReactNode
  title?: string
  hide?: boolean
}

const Content = ({ title, children, hide }: LayoutProps) => {
  const site = siteConfig
  console.log(hide)
  return (
    <>
      <div className="container">
        <Metatags title={title} />
        <Header siteTitle={site.title} />
        <main>
          {!hide && <h1 className={utilStyles.pageHeader}>{title}</h1>}
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

export default function Layout({ children, title, hide = false }: LayoutProps) {
  return (
    <Content title={title} hide={hide}>
      {children}
    </Content>
  )
}
