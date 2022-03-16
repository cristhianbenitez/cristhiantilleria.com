import React from "react"
import Head from "next/head"
import siteConfig from "@/data/siteconfig.json"
import { useRouter } from "next/router"
type Props = {
  title?: string
}

const Metatags = ({ title }: Props) => {
  const { pathname } = useRouter()
  const site = siteConfig
  const thumbnail = `https://${process.env.VERCEL_URL}/thumbnail.png`
  const description = site.description
  const url = `${site.siteUrl}${pathname}`

  const pageTitle = title ? `${title} | ${site.title}` : site.title
  return (
    <Head>
      <title>{pageTitle}</title>
      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnail} />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <meta content="summary_large_image" name="twitter:card" />

      <meta content="en" property="og:locale" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  )
}

export default Metatags
