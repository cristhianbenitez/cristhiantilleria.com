import React from "react"
import Head from "next/head"
import siteConfig from "@/data/siteconfig.json"

type Props = {
  title?: string
}

const Metatags = ({ title }: Props) => {
  const site = siteConfig
  const thumbnail = `https://${process.env.VERCEL_URL}/images/og.png`
  const description = site.description

  const pageTitle = title ? `${title} | ${site.title}` : site.title
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta content={pageTitle} name="title" />
      <meta content={pageTitle} name="twitter:title" />

      <meta content={description} name="description" />
      <meta content={description} name="twitter:description" />
      <meta content={description} property="og:description" />

      {/* {pathname && <meta content={url + pathname} property="og:url" />} */}

      <meta content={thumbnail} property="og:image" />
      <meta content={thumbnail} property="og:image:secure_url" />
      <meta content={thumbnail} name="twitter:image" />

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
