import React from "react"

import Layout from "@/components/Layout"
// import Image from "next/image"
// import selfPic from "@/assets/images/skydive.jpg"

const about = () => {
  return (
    <>
      <Layout title="About">
        {/* <section>
          <p>
            Hey There!! I&apos;m Cristhian, a passionate introvert who wants to
            help make the world a better place by building cool stuff on the web
            and learn something new everything to improve my understanding of
            world.
          </p>
          <p>
            Currently I&apos;m based in NYC, I spent much of my time trying to
            write, thinking, reading, and trying to connect with new people.
            I&apos;m a adventurous soul
          </p>
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
        </section> */}
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
