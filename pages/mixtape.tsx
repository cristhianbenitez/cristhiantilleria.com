import React from "react"

import Layout from "@/components/Layout"
import Accordion from "@/components/Accordion"

const mixtape = () => {
  return (
    <>
      <Layout title="Mixtape">
        <p>
          Most of my time I spend listening to music, podcasts or something I
          stumble upon a video that really makes me thing I many things. So, why
          not share it!
        </p>
        <section>
          <h2>Categories</h2>
          <Accordion>
            <Accordion.Item>
              <Accordion.Header>
                <strong>Findings</strong>
              </Accordion.Header>
              <Accordion.Body>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    There&apos;s always something new to find on the internet,
                    books or kind of anywhere. Why not share it ?{" "}
                  </li>
                  <br />
                  <li>
                    Recently I stumbled this video of this young japanese
                    pianist and I really loved this pieced he played.
                    <iframe
                      style={{ borderRadius: "12px" }}
                      width="300"
                      height="205"
                      src="https://www.youtube-nocookie.com/embed/DtnljX1bjRs?start=392"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </li>
                  <li>
                    Someone in twitter shared this albums artist and since then
                    I&apos;ve playing it non stop
                    <iframe
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/album/0RqOFwSMSF02awYaXYdtxo?utm_source=generator&theme=0"
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Header>
                <strong>My Playlist</strong>
              </Accordion.Header>
              <Accordion.Body>
                <span>
                  Feel free to share your favorite songs with me as well, I
                  would like to listen to all kind of music.
                </span>
                <br />
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/2OfxpDFjElTGvjg1OIiSKM?utm_source=generator&theme=0"
                  width="100%"
                  height="380"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Header>
                <strong>Podcasts</strong>
              </Accordion.Header>
              <Accordion.Body>
                <span>
                  If you&apos;ve listened to any of these or like the
                  poetasters, doesn&apos;t hesitate to text me and let&apos;s
                  have a chat about them, I find it really refreshing talking
                  with people about things I&apos;ve listened to and ideas I
                  picked from it
                </span>
                <br />
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/66DZnsiponQ4r2Q2GZUKXY?utm_source=generator"
                  width="100%"
                  height="380"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>
      </Layout>
    </>
  )
}

export default mixtape
