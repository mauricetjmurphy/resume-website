import React from "react"
import { Link } from "gatsby"
import { VscGithub } from "react-icons/vsc"
import { RiLinkedinFill } from "react-icons/ri"
import { FaTwitter, FaInstagram } from "react-icons/fa"
import styled from "styled-components"

const SocialStripContainer = styled.section`
  position: fixed;
  height: 280px;
  left: 5%;
  bottom: 0;

  @media (max-width: 768px) {
    display: none;
  }

  svg {
    height: 20px;
    width: 20px;
    color: var(--slate);
  }

  svg:hover {
    opacity: 0.6;
  }

  svg:active {
    color: var(--slate);
  }
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
`

const strip = {
  display: "flex",
  justtifyContent: "center",
  padding: "0",
  margin: "20px  auto",
  width: "2px",
  height: "40%",
  background: "var(--slate)",
  zIndex: "5",
}

function SocialStrip() {
  return (
    <SocialStripContainer>
      <IconContainer>
        <Link
          style={{ color: "var(--slate" }}
          to="https://github.com/mauricetjmurphy"
          target="_blank"
        >
          <VscGithub />
        </Link>
        <Link style={{ color: "var(--slate" }} to="https://www.instagram.com">
          <FaInstagram />
        </Link>
        <Link
          style={{ color: "var(--slate" }}
          to="https://www.linkedin.com/in/maurice-tj-murphy"
          target="_blank"
        >
          <RiLinkedinFill />
        </Link>
        <Link
          style={{ color: "var(--slate" }}
          to="https://twitter.com"
          target="_blank"
        >
          <FaTwitter />
        </Link>
      </IconContainer>
      <span style={strip}></span>
    </SocialStripContainer>
  )
}

export default SocialStrip
