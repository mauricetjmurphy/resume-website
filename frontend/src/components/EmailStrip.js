import React from "react"
import styled from "styled-components"

const EmailStripContainer = styled.section`
  position: fixed;
  height: 280px;
  right: 5%;
  bottom: 0;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    opacity: 0.6;
  }

  a:active {
    color: var(--purple);
  }
`
const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%; ;
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

function EmailStrip() {
  return (
    <EmailStripContainer>
      <EmailContainer>
        <a
          href="mailto:mauricetjmurphy@gmail.com"
          style={{
            writingMode: "vertical-rl",
            fontSize: "14px",
            textDecoration: "none",
            color: "var(--slate)",
          }}
        >
          mauricetjmurphy@gmail.com
        </a>
      </EmailContainer>
      <span style={strip}></span>
    </EmailStripContainer>
  )
}

export default EmailStrip
