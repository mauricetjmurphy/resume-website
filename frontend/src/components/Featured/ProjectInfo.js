import React from "react"
import styled from "styled-components"

import { FiGithub } from "react-icons/fi"
import { CgScreen } from "react-icons/cg"

const InfoContainer = styled.div`
  height: 400px;
  width: 40%;
  min-width: 350px;
  padding: 0 25px;

  h1 {
    font-size: 34px;
  }
  h2 {
    font-size: 14px;
  }
  p {
    color: var(--slate);
  }
  a {
    color: var(--slate);
    padding: 10px;

    &:hover {
      opacity: 0.5;
    }
  }
  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
const DescriptionContainer = styled.div``

const TechnologiesContainer = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: var(--slate);
    font-family: sfmono;
    font-size: 14px;
  }
`

const IconContainer = styled.div`
  margin-top: 10px;
`

function ProjectInfo({
  projectName,
  projectDesciption,
  technologies,
  alignment,
  gitHubUrl,
  websiteUrl,
}) {
  return (
    <InfoContainer>
      <h2 style={{ textAlign: `${alignment}` }}>Featured Project</h2>
      <h1 style={{ textAlign: `${alignment}` }}>{projectName}</h1>
      <DescriptionContainer>
        <p style={{ textAlign: `${alignment}` }}>{projectDesciption}</p>
      </DescriptionContainer>
      <TechnologiesContainer>
        {technologies.map((el, i) => (
          <span key={i}>{el}</span>
        ))}
      </TechnologiesContainer>
      <IconContainer
        style={
          alignment === "right"
            ? { display: "flex", justifyContent: "flex-end" }
            : { display: "flex", justifyContent: "flex-start" }
        }
      >
        <a href={`${gitHubUrl}`} target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a href={`${websiteUrl}`} target="_blank" rel="noreferrer">
          <CgScreen />
        </a>
      </IconContainer>
    </InfoContainer>
  )
}

export default ProjectInfo
