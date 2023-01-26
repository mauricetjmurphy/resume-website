import React from "react"
import "../../styles/main.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"

function Sidebar({ isOpen, toggleSidebar, menuLinks }) {
  return (
    <div className={isOpen ? "sidebar active" : "sidebar"}>
      <ul className="nav-links">
        {menuLinks.map((el, i) => (
          <li onClick={toggleSidebar} className="link-item" key={i}>
            <AnchorLink className="link-item" to={`#${el.name.toLowerCase()}`}>
              {el.name}
            </AnchorLink>
          </li>
        ))}
        <a
          className="resume"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </ul>
    </div>
  )
}

export default Sidebar
