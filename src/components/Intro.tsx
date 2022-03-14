import React from "react"
import { useSpring, a } from "@react-spring/web"
import Link from "next/link"

import utilStyles from "@/styles/utils.module.css"

const Intro = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 500,
  })
  return (
    <>
      <a.section style={props} id="intro">
        <div className="intro">
          <div className="intro-title">
            <h1>Cristhian Benitez</h1>
            <span className={utilStyles.lightText}>Front-End Developer</span>
          </div>
        </div>

        <div className="helper-text">
          <span>Using my passion to help you pursue yours</span>
          <Link href={"/about"}>
            <a>Learn More</a>
          </Link>
        </div>
      </a.section>

      <style jsx>
        {`
          .intro {
            display: flex;
            justify-content: flex-end;
            height: 80vh;
          }
          .intro-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-items: flex-end;
            text-align: end;
          }
          .intro-title > h1 {
            font-size: 4rem;
            margin: 0;
          }
          .intro-title > span {
            font-size: 1.5rem;
          }

          .helper-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            font-family: "Source Serif Pro", Helvetica, sans-serif;
            margin-bottom: 5em;
          }
          .helper-text > a {
            font-size: 0.75rem;
          }
        `}
      </style>
    </>
  )
}

export default Intro
