import Layout from "@/components/Layout"
import React from "react"

const Projects = () => {
  return (
    <Layout title="Projects">
      <section style={{ display: "flex", flexDirection: "column" }}>
        <a href="https://github.com/cristhianbenitez/crypto-app">Crypto App</a>
        <a href="https://github.com/cristhianbenitez/recognizio">Recognizio</a>
        <a href="https://github.com/cristhianbenitez/my-netflix-clone">
          Netflix Clone
        </a>
        <a href="https://github.com/cristhianbenitez/html-websites">
          HTML websites
        </a>
        <a href="https://github.com/cristhianbenitez/responsive-web-pages">
          Responsive Websites
        </a>
      </section>
    </Layout>
  )
}

export default Projects
