import { getSortedPostsData } from "@/lib/posts"
import Date from "@/components/Date"
import Link from "next/link"
import utilStyles from "@/styles/utils.module.css"
import Layout from "@/components/Layout"

const Blog = ({ allPostsData }: any) => {
  console.log(allPostsData)
  return (
    <Layout>
      <section>
        <p>
          Basically, any of my writings here is very structured, I&apos;m still
          trying to improve my writing skills so I just thought about putting
          just any kind of writing that&apos;ve came up with in here.
        </p>
      </section>

      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }: any) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/blogs/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
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
