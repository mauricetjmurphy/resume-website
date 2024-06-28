import React from "react"
import styled from "styled-components"

const TitleContainer = styled.div`
  width: 100%;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    border-bottom: solid 1px var(--slate);
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 1;
  }

  @media (max-width: 768px) {
    max-width: 700px;
  }

  @media (max-width: 480px) {
    margin: 0 auto;
    width: calc(90vw);
  }
`

interface TitlePropTypes {
  number: string
  title: string
}

function Title({ number, title }: TitlePropTypes) {
  const Title = styled.h1`
    background: var(--navy);
    width: auto;
    display: inline-block;
    z-index: 3;
    padding: 0 20px 0 0;
    position: relative;
    margin: 15px 0;
    font-size: 32px;
    font-family: calibre;

    &::before {
      content: "${number}";
      color: var(--green);
      font-size: 26px;
      font-family: sfmono;
      padding-right: 7.5px;
      font-weight: 300;

      @media (max-width: 480px) {
        font-size: 22px;
      }
    }

    @media (max-width: 480px) {
      font-size: 26px;
    }
  `

  return (
    <TitleContainer>
      <Title>{`${title}`}</Title>
    </TitleContainer>
  )
}

export default Title
