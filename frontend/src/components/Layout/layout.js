/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import Header from "../header"
import Navbar from "../Navbar/Navbar"
import SocialStrip from "../SocialStrip"
import EmailStrip from "../EmailStrip"
import "./layout.css"
import "../../styles/main.css"
import Sidebar from "../Navbar/Sidebar"
import Footer from "../Footer"
import data from "./layoutData"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <>
      <Header data={data} />
      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} menuLinks={data} />
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} menuLinks={data} />
      <SocialStrip />
      <EmailStrip />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
