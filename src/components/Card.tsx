import React from "react"
import Image from "next/image"

import Github from "@/assets/icons/github.svg"
import Repo from "@/assets/icons/repository.svg"

type Props = {
  image: string
  title: string
  description: string
  live: string
  repo: string
}

const Card = (props: Props) => {
  return (
    <>
      <article className="card">
        <div className="card-image">
          {props.image && (
            <Image
              src={props.image}
              alt={`image of ${props.title}`}
              layout="fill"
            />
          )}
        </div>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-description">{props.description}</p>
          <div className="card-links">
            <a href={props.repo}>
              <Image src={Github} width={30} height={30} alt="github link" />
            </a>
            <a href={props.live}>
              <Image src={Repo} width={30} height={30} alt="github link" />
            </a>
          </div>
        </div>
      </article>
      <style jsx>{`
        .card {
          background: #ffffff;
          color: #000000;
          width: 17rem;
          height: 30rem;
          border-radius: 12px;
          padding: 1em 1em;
          box-shadow: hsl(0, 100%, 100%, 0.1) 5px 5px 5px 5px;
        }
        .card-title {
          margin: 0;
        }
        .card-body {
          padding: 0 0.5em;
        }
        .card-image {
          position: relative;
          width: 100%;
          height: 200px;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 0.5em;
        }
        .card-description {
          font-size: 0.8rem;
        }
        .card-links {
          display: flex;
          justify-content: center;
          gap: 2em;
        }
      `}</style>
    </>
  )
}

export default Card
