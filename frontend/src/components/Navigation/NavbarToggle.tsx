import React from "react"
import styled from "styled-components"

const Button = styled.div`
  height: 20px;
  width: 40px;
  background: transparent;
  border: none;
  z-index: 10;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    display: none;
  }
  .line {
    display: block;
    width: 22px;
    height: 2px;
    background: #fff;
    border-radius: 4px;
    margin: 6px 0;
    transition: transform 0.5s, margin 0.5s;
    background: #64ffda;
  }

  .line1 {
    transform: rotateZ(45deg);
    margin: -2px;
  }

  .line2 {
    transform: rotateZ(-45deg);
    margin: -2px;
  }
`

interface NavbarTogglePropTypes {
  isOpen: boolean
  toggleSidebar: () => void
  className?: string
}

function NavbarToggle({ isOpen, toggleSidebar, className }:NavbarTogglePropTypes) {
  return (
    <Button onClick={toggleSidebar}>
      <span className={isOpen ? "line line1" : "line"}></span>
      <span className={isOpen ? "line line2" : "line"}></span>
    </Button>
  )
}

export default NavbarToggle
