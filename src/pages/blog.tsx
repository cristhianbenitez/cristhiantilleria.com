import { getSortedPostsData } from "@/lib/posts"
import Date from "@/components/Date"
import Link from "next/link"
import utilStyles from "@/styles/utils.module.css"
import Layout from "@/components/Layout"
import PlainList from "@/components/PlanList"
import PlainLink from "@/components/PlainLink"

const Blog = ({ allPostsData }: any) => {
  return (
    <Layout title="Blog">
      <section>
        <p>
          Hey hey hey I spent HOURS thinking about what a blog really works,
          then I decided I would give the meaning a want haha, so basically here
          I post anything I&apos;ve written long or short{" "}
          {`(Hopefully in the future I happen to start Essays and have a separate page but We'll see...)`}
        </p>
        <p>
          Basically, any of my writings here is very structured, I&apos;m still
          trying to improve my writing skills.
        </p>
      </section>

      <section>
        <PlainList>
          {allPostsData.map(({ id, date, title }: any) => (
            <li className={utilStyles.listItem} key={id}>
              <PlainLink href={`/writings/${id}`}>{title}</PlainLink>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </PlainList>
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
