import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

import Layout from "@/components/Layout"
import Date from "@/components/Date"
import utilStyles from "@/styles/utils.module.css"
import { getAllPostIds, getPostData } from "@/lib/posts"

type Props = {
  postData: {
    contentHtml: string
    date: string
    id: string
    title: string
  }
}

const Post = ({ postData }: Props) => {
  const router = useRouter()

  return (
    <>
      <Layout title={postData.title}>
        <article className="article wrapper">
          <section className="article-header">
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <span className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </span>
          </section>
          <section
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            className="article-body"
          />
          <span className="back" onClick={() => router.back()}>
            ← Back to blog
          </span>
        </article>
      </Layout>
      <style jsx>{`
        .wrapper {
          margin: 0 auto;
          max-width: 35em;
        }
        .article-header {
          margin-top: 2em;
          margin-bottom: 3em;
        }
        .article-body {
          text-align: left;
          font-family: "Source Sans 3", sans-serif;
        }
        .back {
          display: block;
          margin-top: 2em;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    console.error("No parameters passed for static generation")
    return { props: {} }
  }
  const postData = await getPostData(params?.id)
  return {
    props: {
      postData,
    },
  }
}
