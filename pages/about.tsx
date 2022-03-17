import React from "react"

import Layout from "@/components/Layout"
import Image from "next/image"
import selfPic from "@/assets/images/skydive.jpg"

const about = () => {
  return (
    <>
      <Layout title="About">
        <section>
          <h2>Who Am I ?</h2>
          <p>
            Hey there! I&apos;m Cristhian, a front-end developer and curious
            introvert who tries contribute by building cool stuff on the web.
          </p>
          <p>
            Currently, I&apos;m based in NYC. I spent much of my time educating
            myself to be able to give back to others. I like many things among
            them, Javascript, photography, reading, trying to connect with new
            people, and also trying to articulate my thoughts by writing and
            making the most of what I learn. I really believe in the importance
            of writing and being more articulate by writing, which also makes
            you a better speaker.
          </p>
        </section>
        <section className="avatar-section">
          <div className="image-wrapper">
            <Image
              src={selfPic}
              alt="skydiving"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <small className="image-caption">
            I like to have some fun somethings{" "}
          </small>
        </section>
        <section>
          <h2>My interests</h2>
        </section>
      </Layout>

      <style jsx>
        {`
          .image-wrapper {
            position: relative;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 0.5em;
          }

          .image-caption {
            opacity: 0.5;
          }
          .avatar-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

export default about
