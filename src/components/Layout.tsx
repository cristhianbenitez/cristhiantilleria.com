import { ReactNode } from "react"

import siteConfig from "@/data/siteconfig.json"
import Header from "./Header"
import Metatags from "./Metatags"
import utilStyles from "@/styles/utils.module.css"
import Script from "next/script"

type LayoutProps = {
  children: ReactNode
  title?: string
  hide?: boolean
}

const Content = ({ title, children, hide }: LayoutProps) => {
  const site = siteConfig
  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-XH7CPH536V', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />
      <div className={utilStyles.container}>
        <Metatags title={title} />
        <Header siteTitle={site.title} />
        <main>
          {!hide && <h1 className={utilStyles.pageHeader}>{title}</h1>}
          {children}
        </main>
      </div>
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
