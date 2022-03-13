import { getSortedPostsData } from "@/lib/posts"
import Date from "@/components/Date"
import utilStyles from "@/styles/utils.module.css"
import Layout from "@/components/Layout"
import PlainList from "@/components/PlainList"
import PlainLink from "@/components/PlainLink"

const Blog = ({ allPostsData }: any) => {
  const { listItem, flexCol } = utilStyles
  return (
    <Layout title="Blog">
      <section>
        <PlainList>
          {allPostsData.map(({ id, date, title }: any) => (
            <li className={`${listItem} ${flexCol}`} key={id}>
              <PlainLink href={`/blog/${id}`} className="blogTitle">
                {title}
              </PlainLink>
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
