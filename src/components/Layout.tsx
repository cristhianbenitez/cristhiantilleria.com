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
  return (
    <div className={utilStyles.container}>
      <Metatags title={title} />
      <Header siteTitle={site.title} />
      <main>
        {!hide && <h1 className={utilStyles.pageHeader}>{title}</h1>}
        {children}
      </main>
    </div>
  )
}

export default function Layout({ children, title, hide = false }: LayoutProps) {
  return (
    <Content title={title} hide={hide}>
      {children}
    </Content>
  )
}
