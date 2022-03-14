import { MDXFrontMatter } from "*.mdx"
import router from "next/router"
import { MDXRemote } from "next-mdx-remote"
import { MDXRemoteSerializeResult } from "next-mdx-remote"

import Layout from "@/components/Layout"
import utilStyles from "@/styles/utils.module.css"
import Date from "@/components/Date"
import { getAllPostSlugs, getPostData } from "@/lib/posts"
import { GetStaticPaths, GetStaticProps } from "next"

const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
}

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: MDXFrontMatter
}

export default function PostPage({ source, frontMatter }: Props) {
  return (
    <>
      <Layout title={frontMatter.title} hide>
        <article className="article wrapper">
          <section className="article-header">
            <h1 className={utilStyles.headingXl}>{frontMatter.title}</h1>
            <span className={utilStyles.lightText}>
              <Date dateString={frontMatter.date as string} />
            </span>
          </section>
          <main className="article-body">
            <MDXRemote {...source} components={components} />
          </main>

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    console.error("No parameters passed for static generation")
    return { props: {} }
  }
  const postData = await getPostData(params?.slug as string)
  return {
    props: {
      ...postData,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostSlugs()

  return {
    paths,
    fallback: false,
  }
}
