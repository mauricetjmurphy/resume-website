import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import Career from "../components/Career/Career"
import Contact from "../components/Contact"
import Projects from "../components/Featured/Projects"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <AboutMe />
    <Career />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
