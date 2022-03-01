import { getSortedPostsData } from "@/lib/posts"
import Date from "@/components/Date"
import Link from "next/link"
import utilStyles from "@/styles/utils.module.css"
import Layout from "@/components/Layout"

const Blog = ({ allPostsData }: any) => {
  return (
    <Layout>
      <section>
        <p>
          Basically, any of my writings here is very structured, I&apos;m still
          trying to improve my writing skills so I just thought about putting
          just any kind of writing that&apos;ve came up with in here.
        </p>
        <p>Not that there&apos;s a lot but there&apos;ll be more {":)"}</p>
      </section>

      <section>
        <h2>Essays</h2>
        <p>
          One of my goals in life is to write at least 100 essays the count as
          of right now is 0 :(
        </p>
      </section>
      <section>
        <h2>Randoms</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }: any) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/writings/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Blog
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
