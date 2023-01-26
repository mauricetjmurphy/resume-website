import React from "react"
import styled from "styled-components"

import data from "./careerData"

const MainContainer = styled.section`
  padding-top: 15px;

  .active {
    border-left: 2px solid var(--green);
    background: var(--light-navy);
  }

  .not-active {
    border-left: 2px solid var(--slate);
    opacity: 0.5;
  }

  span {
    color: var(--slate);
  }

  @media (max-width: 480px) {
    display: none;
  }
`

const CareerItemContainer = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 40px;
  z-index: 5;
  cursor: pointer;
`

function CareerSideMenu({ jobNum, setJobNum }) {
  return (
    <MainContainer>
      <CareerItemContainer
        onClick={() => setJobNum(1)}
        className={jobNum === 1 ? "active" : "not-active"}
      >
        <span>{data[0].companyName}</span>
      </CareerItemContainer>
      <CareerItemContainer
        onClick={() => setJobNum(2)}
        className={jobNum === 2 ? "active" : "not-active"}
      >
        <span>{data[1].companyName}</span>
      </CareerItemContainer>
      <CareerItemContainer
        onClick={() => setJobNum(3)}
        className={jobNum === 3 ? "active" : "not-active"}
      >
        <span>{data[2].companyName}</span>
      </CareerItemContainer>
    </MainContainer>
  )
}

export default CareerSideMenu
