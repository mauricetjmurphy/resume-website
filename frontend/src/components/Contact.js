import React from "react"
import styled from "styled-components"

const ContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .main-title {
    font-size: 60px;

    @media (max-width: 480px) {
      font-size: 40px;
    }
  }

  .contact-body {
    font-size: 20px;
    color: var(--slate);
  }

  .email-me {
    font-size: 18px;
    border: 1px solid var(--green);
    padding: 12px 30px;
    color: var(--green);
    font-family: sfmono;
    margin-top: 20px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background: #64ffda24;
    }
  }

  @media (max-width: 480px) {
    padding: 50px 20px;
  }
`

function Contact() {
  return (
    <ContactSection id="contact">
      <h2 className="section-title">03. Whats Next?</h2>
      <h1 className="main-title">Get In Touch</h1>
      <p className="contact-body">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <a href="mailto:mauricetjmurphy@gmail.com" className="email-me">
        Email Me
      </a>
    </ContactSection>
  )
}

export default Contact
