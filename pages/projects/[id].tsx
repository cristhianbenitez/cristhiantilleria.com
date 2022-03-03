import { GetStaticPaths, GetStaticProps } from "next"
import React from "react"

import Layout from "@/components/Layout"
import { getAllProjectsIds, getProjectsData } from "@/lib/projects"
import utilStyles from "@/styles/utils.module.css"

interface ProjectDataProps {
  projectData: {
    contentHtml: string
    date: string
    description: string
    id: string
    title: string
  }
}

const Project = ({ projectData }: ProjectDataProps) => {
  return (
    <Layout title={projectData.title}>
      <article>
        <h1>{projectData.title}</h1>
        <div className={utilStyles.lightText}>{projectData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  )
}

export default Project

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectsIds()
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
  const projectData = await getProjectsData(params?.id)
  return {
    props: {
      projectData,
    },
  }
}
