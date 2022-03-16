import { ReactNode } from "react"

import Header from "./Header"
import Metatags from "./Metatags"
import utilStyles from "@/styles/utils.module.css"

type LayoutProps = {
  children: ReactNode
  title?: string
  hide?: boolean
}

const Content = ({ title, children, hide }: LayoutProps) => {
  return (
    <div className={utilStyles.container}>
      <Metatags title={title} />
      <Header />
      <main>
        {!hide && <h2 className={utilStyles.pageHeader}>{title}</h2>}
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
