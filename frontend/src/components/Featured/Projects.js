import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import ProjectInfo from "./ProjectInfo"
import styled from "styled-components"
import projectData from "./projectData"

const ProjectsContainer = styled.section`
  margin: 0 auto;
  padding: 100px 0px;
  max-width: 1000px;

  @media (max-width: 768px) {
    position: relative;
  }

  @media (max-width: 480px) {
    max-width: 400px;
    margin: 0 auto;
    padding: 50px 0px;
  }
`
const ProjectItem = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`
const ProjectImageContainer = styled.a`
  width: 60%;
  padding: 30px;
  height: 50%;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }

  img {
    filter: grayscale(100%);
    border-radius: 5px;

    @media (max-width: 768px) {
      filter: brightness(40%);
    }

    @media (max-width: 480px) {
      display: none;
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      imageOne: file(relativePath: { eq: "nevertoolate.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { eq: "fabrique.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ProjectsContainer id="projects">
      <Title number={"02."} title={"Projects"} />
      <ProjectItem>
        <ProjectImageContainer
          href="https://nevertoolate.world/"
          target="_blank"
          rel="noreferrer"
        >
          <Img
            fluid={data.imageOne.childImageSharp.fluid}
            objectFit={"cover"}
          />
        </ProjectImageContainer>
        <ProjectInfo
          alignment={"left"}
          projectName={projectData[0].projectName}
          projectDesciption={projectData[0].projectDescription}
          technologies={projectData[0].technologies}
          gitHubUrl={"https://github.com/mauricetjmurphy/Personal_Site_Gatsby"}
          websiteUrl={"https://resume.gemtechsolutions.org/"}
        />
      </ProjectItem>
    </ProjectsContainer>
  )
}

export default Projects
