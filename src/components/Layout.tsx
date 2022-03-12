import Head from "next/head"
import { ReactNode } from "react"

import siteConfig from "@/data/siteconfig.json"
import { useRouter } from "next/router"
import Header from "./Header"
import MetaTags from "./MetaTags"

type LayoutProps = {
  home?: any
  children: ReactNode
  title?: string
}
const Content = ({ home, title, children }: LayoutProps) => {
  const router = useRouter()
  const site = siteConfig
  const thumbnail = "/public/thumbnail.png"

  const pageTitle = title ? `${title} | ${site.title}` : site.title
  return (
    <>
      <div className="container">
        <Head>
          <MetaTags
            thumbnail={thumbnail}
            pageTitle={pageTitle}
            description={site.title}
          />
        </Head>
        <Header siteTitle={site.title} />
        <main>{children}</main>

        {!home && (
          <div className="backToHome">
            <span className="link" onClick={() => router.back()}>
              ← Back
            </span>
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          max-width: 55rem;
          padding: 0 1rem;
          margin: 2em auto;
        }
        .backToHome {
          margin: 3rem 0 0;
        }
        .link {
          color: #0070f3;
          cursor: pointer;
        }
        .link:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}

export default function Layout({ children, home, title }: LayoutProps) {
  return (
    <>
      <Content home={home} title={title}>
        {children}
      </Content>
    </>
  )
}
