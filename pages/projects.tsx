import React from "react"
import { nanoid } from "nanoid"

import Layout from "@/components/Layout"
import utilStyles from "@/styles/utils.module.css"
import { getSortedProjectsData } from "@/lib/projects"

interface ProjectsProps {
  allProjectsData: {
    date: string
    title: string
    id: string
    description: string
    stack: string[]
  }[]
}

const Projects = ({ allProjectsData }: ProjectsProps) => {
  return (
    <>
      <Layout title="Projects">
        <section>
          {allProjectsData.map(({ title, description, id, date, stack }) => {
            return (
              <article key={nanoid()} className="projects-container">
                <a href={`/projects/${id}`}>{title}</a>
                <small className={utilStyles.lightText}>{date}</small>
                <small>{description}</small>
              </article>
            )
          })}
        </section>
      </Layout>

      <style jsx>{`
        .projects-container {
          padding: 1em 0;
          border-bottom: 1px solid hsl(0, 0%, 0%, 0.2);
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData,
    },
  }
}

export default Projects
