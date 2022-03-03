import Head from "next/head"
import { ReactNode } from "react"

import siteConfig from "@/data/siteconfig.json"
import { useRouter } from "next/router"
import Header from "./Header"

type LayoutProps = {
  home?: any
  children: ReactNode
  title?: string
}
const Content = ({ home, title, children }: LayoutProps) => {
  const router = useRouter()
  const site = siteConfig

  const pageTitle = title ? `${title} | ${site.title}` : site.title
  return (
    <>
      <div className="container">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              site.title
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={site.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <title>{pageTitle}</title>
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
