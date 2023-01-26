import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "react-scroll"
import styled from "styled-components"
import NavbarToggle from "./NavbarToggle"

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 80px;
  background: #0a192f;

  @media (max-width: 768px) {
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    padding: 0 30px;
  }
`

const LinkItem = styled.div`
  a {
    position: relative;
  }

  /*effect-box*/
  a:after,
  a:before {
    content: "";
    position: absolute;
    left: 0;
    display: inline-block;
    height: 36px;
    width: 100%;

    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
  }

  a:before {
    border-left: 1px solid var(--green);
    border-right: 1px solid var(--green);
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
  }

  a:after {
    border-bottom: 1px solid var(--green);
    border-top: 1px solid var(--green);
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }

  a:hover:after,
  a:hover:before {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`

const NavBrand = styled.div`
  width: 70%;
  display: flex;
  align-items: center;

  img {
    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
    }
  }
`

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-family: sfmono;

  @media (max-width: 768px) {
    display: none;
  }
`

const linkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  margin: "0",
  padding: "0 20px",
  fontSize: "13px",
  color: "#ccd6f6",
}

const linkNum = {
  margin: "0",
  padding: "0 5px 0 0",
  color: "var(--green)",
}

const linkText = {
  margin: "0",
  padding: "0",
}

const Resume = styled.a`
  border: 1px solid var(--green);
  background: var(--navy);
  color: var(--green);
  font-size: 13px;
  padding: 4px 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #64ffda24;
  }
`

function Navbar({ isOpen, toggleSidebar, menuLinks }) {
  return (
    <Nav>
      <NavBrand>
        <Link smooth={true} duration={1000} to="hero">
          <StaticImage
            src="../../images/logo.svg"
            width={60}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Logo"
          />
        </Link>
      </NavBrand>
      <NavLinks>
        {menuLinks.map((link, i) => (
          <LinkItem key={i}>
            <Link
              smooth={true}
              duration={1000}
              to={link.link}
              style={linkStyle}
            >
              <p style={linkNum}>0{i}.</p>
              <p style={linkText}>{link.name}</p>
            </Link>
          </LinkItem>
        ))}
        <Resume href="/Maurice_Murphy.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </Resume>
      </NavLinks>
      <NavbarToggle isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </Nav>
  )
}

export default Navbar
