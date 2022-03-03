import Layout from "@/components/Layout"

import utilStyles from "@/styles/utils.module.css"

export default function Home({}: any) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>
          Hello! I&apos;m Cristhian a Front End Developer and a hobbyist
          Photographer.
        </p>
        <p>
          Contact me at{` `}
          <a href="https://twitter.com/pipebenitez25">Twitter, </a>
          <a href="https://www.linkedin.com/in/cristhianbenitez/">LinkedIn, </a>
          <a href="mailto:cristhiantilleria@gmail.com">Email</a>
        </p>
        <span>
          PD: This is currently a just a quick first iteration for my own
          website, created with Next.js.
        </span>
      </section>
    </Layout>
  )
}
