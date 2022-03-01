import Head from "next/head"
import Link from "next/link"
import Layout, { siteTitle } from "@/components/Layout"

import utilStyles from "../styles/utils.module.css"

export default function Home({}: any) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello! I&apos;m Cristhian a Front End Developer and a hobbyist
          Photographer. You can contact me at{` `}
          <a href="https://twitter.com/pipebenitez25">Twitter, </a>
          <a href="https://www.linkedin.com/in/cristhianbenitez/">LinkedIn, </a>
          <a href="mailto:cristhiantilleria@gmail.com">Email</a>
        </p>
        <p>
          {/* What I’m really trying to convey to any person who sees my website is
          just who I am with no filter. Just because I’ve lived my whole life
          having to behave myself or just not saying some things because people
          wouldn’t understand it, maybe even having to not tell people about
          what I like, like not seeing anime when I was around other people,
          just because of the fear of being judge, I guess that’s something that
          sticks to my self from living in such a small community and always
          caring what other people thought about my self. */}
        </p>
        <b>
          PD: This is currently a just a quick first iteration for my own
          website, created with Next.js.
        </b>
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Link href={"/writings"}>
          <a className={utilStyles.headingLg}>Writings</a>
        </Link>
        <Link href={"/projects"}>
          <a className={utilStyles.headingLg}>Projects</a>
        </Link>
      </section>
    </Layout>
  )
}
