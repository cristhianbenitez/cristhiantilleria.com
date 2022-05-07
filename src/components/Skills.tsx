import React from "react"
import utilStyles from "@/styles/utils.module.css"

const Skills = () => {
  return (
    <>
      <section className={`${utilStyles.container} skills`}>
        <h2 className="skills-title"> My Skills</h2>
        <p>
          Through my studies, I&apos;ve gained a solid understanding of web
          development concepts, and have dedicated a lot of my free time to
          apply these concepts to real-world scenarios and applications.
        </p>
        <section className="skills-list-wrapper">
          <ul className="skills-list">
            <li> ○ Javascript</li>
            <li> ○ Typescript</li>
            <li> ○ NodeJS</li>
            <li> ○ Wordpress</li>
          </ul>
          <ul className="skills-list">
            <li> ○ HTML & CSS</li>
            <li> ○ PHP</li>
            <li> ○ React</li>
            <li> ○ Redux</li>
          </ul>
          <ul className="skills-list">
            <li> ○ Styled-Components</li>
            <li> ○ Git</li>
            <li> ○ MongoDB</li>
            <li> ○ MySQL</li>
          </ul>
          <ul className="skills-list">
            <li> ○ Figma</li>
            <li> ○ Adobe XD</li>
            <li> ○ Jira</li>
            <li> ○ ZenHub</li>
          </ul>
        </section>
      </section>

      <style jsx>{`
        .skills {
          width: 100%;
        }
        .skills-list {
          list-style: none;
          padding: 0;
        }

        .skills-list-wrapper {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default Skills
