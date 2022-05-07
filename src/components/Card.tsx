import React from "react"

type Props = {
  image: string
  title: string
  description: string
  live: string
  source: string
}

const Card = ({ title, description, image, live, source }: Props) => {
  return (
    <>
      <div className="card">
        <div className="content">
          <h1 className="header">{title}</h1>
          <p className="text">{description}</p>
          <div className="buttons">
            <a
              href={live ? live : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Live Demo
            </a>
            <a
              href={source ? source : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .card {
            width: 100%;
            height: 400px;
            overflow: hidden !important;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top;
            background-image: ${`linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url("${image}")`};
          }

          .card .content {
            font-family: "Open Sans";
            text-align: center;
            padding: 10px;
            opacity: 0;
            transition: all 500ms ease-in-out;
            transform: translate(0, 20px);
          }
          .card .content h1 {
            font-size: 20px;
            color: white;
          }
          .card .content p {
            font-size: 14px;
            color: white;
            margin-bottom: 20px;
          }

          .card .content .btn {
            background-color: black;
            color: white;
            padding: 10px;
            font-size: 12px;
            text-decoration: none;
            border-radius: 6px;
          }
          .card:hover .content {
            opacity: 1;
            transform: translate(0, 0px);
          }

          .card:hover {
            background-image: ${`linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 1)),url("${image}")`};
          }

          .buttons {
            display: flex;
            gap: 20px;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Card
