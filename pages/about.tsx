import React from "react"

import Layout from "@/components/Layout"
import Image from "next/image"
import selfPic from "@/assets/images/skydive.jpg"

const about = () => {
  return (
    <>
      <Layout title="About">
        <section>
          <p>
            Cristhian Benitez is a passionate introvert who wants to help make
            the world a better place by building cool stuff on the web. He
            spends his time trying to write, reading, thinking, and continuously
            acquiring knowledge
          </p>
          <p>As a</p>

          <div className="image-wrapper">
            <div className="selfPic">
              <Image
                src={selfPic}
                alt="skydiving"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
      </Layout>
      <style jsx>
        {`
          .selfPic {
            position: relative;
            width: 400px;
            height: 400px;
          }
          .image-wrapper {
            border-radius: 100%;
            overflow: hidden;
            width: fit-content;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  )
}

export default about
