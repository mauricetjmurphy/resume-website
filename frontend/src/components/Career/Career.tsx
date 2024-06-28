import React, { useState } from "react"
import styled from "styled-components"
import CareerInfo from "./CareerInfo"
import CareerSideMenu from "./CareerSideMenu"
import CareerTopMenu from "./CareerTopMenu"
import Title from "../Title"

const CareerContainer = styled.div`
  margin: 0 auto;
  padding: 100px 0px;
  max-width: 800px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
    padding: 50px 0px;
  }
`

const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
    margin: 0;
  }
`

function Career() {
  const [jobNum, setJobNum] = useState(1)

  return (
    <CareerContainer id="career">
      <Title number={"01."} title={"Work Experiance"} />
      <ContentContainer>
        <CareerSideMenu jobNum={jobNum} setJobNum={setJobNum} />
        <CareerTopMenu jobNum={jobNum} setJobNum={setJobNum} />
        <CareerInfo jobNum={jobNum} />
      </ContentContainer>
    </CareerContainer>
  )
}

export default Career
