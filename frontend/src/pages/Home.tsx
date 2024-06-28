import AboutMe from "../components/AboutMe"
import Career from "../components/Career/Career"
import Contact from "../components/Contact"
import Projects from "../components/Featured/Projects"
import Hero from "../components/Hero"
import Layout from "../components/Layout/Layout"


const HomePage = () => (
    <Layout title="Home">
      <Hero />
      <AboutMe />
      <Career />
      <Projects />
      <Contact />
    </Layout>
  )
  
  export default HomePage