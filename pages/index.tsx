import React from "react"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"

import Layout from "@/components/Layout"
import utilStyles from "@/styles/utils.module.css"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Intro from "@/components/Intro"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  const parallax = React.useRef<IParallax>(null)

  const styles = {
    layer1: {
      display: "flex",
      backgroundColor: "#1F2933",
      paddingTop: "4em",
      alignItems: "center",
    },
  }
  return (
    <>
      <Layout>
        <Parallax ref={parallax} pages={4} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            className={utilStyles.container}
          >
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.25} style={styles.layer1}>
            <Skills />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.25}>
            <Projects />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.25} style={styles.layer1}>
            <ContactForm />
          </ParallaxLayer>
        </Parallax>
      </Layout>

      <style jsx>{``}</style>
    </>
  )
}
