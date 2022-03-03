import Head from "next/head"
import { GetStaticPaths, GetStaticProps } from "next"

import Layout from "@/components/Layout"
import Date from "@/components/Date"
import utilStyles from "@/styles/utils.module.css"
import { getAllPostIds, getPostData } from "@/lib/posts"

const Post = ({ postData }: any) => {
  return (
    <Layout title={postData.title}>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
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
