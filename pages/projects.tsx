import React from "react"
import { nanoid } from "nanoid"

import Layout from "@/components/Layout"
import utilStyles from "@/styles/utils.module.css"

const Projects = ({ allProjectsData }) => {
  return (
    <>
      <Layout title="Projects">
        <p>Some of my main projects:</p>
        <section>
          <p>
            Visit my<a href="https://github.com/cristhianbenitez"> Github </a>
            profile to see more
          </p>
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

export default Projects
