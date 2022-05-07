import React from "react"
import { nanoid } from "nanoid"

import projects from "@/data/projects.json"
import Card from "@/components/Card"
import utilStyles from "@/styles/utils.module.css"

const Projects = () => {
  return (
    <>
      <section className={utilStyles.container} id="projects">
        <section className="projects-cards">
          <div className="section" id="work">
            <div className="work-wrapper">
              <h1>Work</h1>

              <div className="grid">
                {projects.map(({ image, title, description, live, source }) => (
                  <Card
                    key={nanoid()}
                    title={title}
                    description={description}
                    image={image}
                    live={live}
                    source={source}
                  ></Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
      <style jsx>{`
        .work-wrapper {
          width: 100%;
          margin-top: 10vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .work-wrapper h1 {
          font-size: 3rem;
          line-height: 20px;
        }
        .work-wrapper .grid {
          display: grid;
          margin-top: 20px;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 10px;
        }
        @media (min-width: 480px and max-width:535px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 535px and max-width:748px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 748px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default Projects
