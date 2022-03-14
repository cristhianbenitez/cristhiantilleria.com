import React from "react"
import { nanoid } from "nanoid"

import projects from "@/data/projects.json"
import Card from "@/components/Card"
import utilStyles from "@/styles/utils.module.css"

type ProjectProps = {
  image: string
  title: string
  description: string
  live: string
  repo: string
}

const Projects = () => {
  return (
    <>
      <section className={utilStyles.container} id="projects">
        <h2 className="projects-title">What I&apos;ve been working on</h2>
        <section className="projects-cards">
          {projects.map(
            ({ image, title, description, live, repo }: ProjectProps) => (
              <Card
                key={nanoid()}
                image={image}
                title={title}
                description={description}
                live={live}
                repo={repo}
              />
            )
          )}
        </section>
      </section>
      <style jsx>{`
        .projects-cards {
          display: flex;
          justify-content: space-between;
        }
        .projects-title {
          margin-bottom: 2em;
        }
      `}</style>
    </>
  )
}

export default Projects
