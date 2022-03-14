import React from "react"

import Layout from "@/components/Layout"

const mixtape = () => {
  return (
    <Layout title="Mixtape">
      <p>
        In this page I would to share many things I recently found online and
        really likes, weather a music, a video, a quote, whatever.
      </p>

      <section>
        <h3>Categories</h3>
        <div>
          <h4>Findings</h4>
          <span>
            There&apos;s always something new to find on the internet, books or
            kind of anywhere. Why not share it ?{" "}
          </span>

          <ul></ul>
        </div>

        <div>
          <h4>My Playlist</h4>
          <span>
            Feel free to share your favorite songs with me as well, I would like
            to listen to all kind of music.
          </span>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/2OfxpDFjElTGvjg1OIiSKM?utm_source=generator&theme=0"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        <div>
          <h4>My Podcasts</h4>
          <span>
            If you&apos;ve listened to any of these or like the poetasters,
            doesn&apos;t hesitate to text me and let&apos;s have a chat about
            them, I find it really refreshing talking with people about things
            I&apos;ve listened to and ideas I picked from it
          </span>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/66DZnsiponQ4r2Q2GZUKXY?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </section>
    </Layout>
  )
}

export default mixtape

// const listOfFindings = [
//   {
//     text: "Recently I just started to listen to classical music a few days ago I watched this video",
//     link: "",
//   },
// ]
