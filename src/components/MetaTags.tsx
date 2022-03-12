import React from "react"

type Props = {
  pageTitle: string
  description: string
  thumbnail: string
}

const MetaTags = ({ pageTitle, description, thumbnail }: Props) => {
  return (
    <>
      {/* Title */}
      <title>{pageTitle}</title>
      <meta content={pageTitle} name="title" />
      <meta content={pageTitle} name="twitter:title" />

      {/* Description */}
      <meta content={description} name="description" />
      <meta content={description} name="twitter:description" />
      <meta content={description} property="og:description" />

      {/* {pathname && <meta content={url + pathname} property="og:url" />} */}

      {/* Thumbnail */}
      {thumbnail && (
        <>
          <meta content={thumbnail} property="og:image" />
          <meta content={thumbnail} property=" og:image:secure_url" />
          <meta content={thumbnail} name="twitter:image" />
        </>
      )}
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <meta content="summary_large_image" name="twitter:card" />

      <meta content="en" property="og:locale" />

      {/* Favicon */}
      <link href="/images/face.jpeg" rel="icon" type="image/jpeg" />
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
      <link rel="manifest" href="." />

      <title>{pageTitle}</title>
    </>
  )
}

export default MetaTags
