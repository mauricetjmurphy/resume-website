import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import data from "./careerData"

const CareerInfoContainer = styled.section`
  margin: 0 0 0 50px;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    flex-direction: column;
    margin: 0 auto;
    width: 80%;
  }

  h1 {
    font-size: 26px;
  }

  a {
    text-decoration: none;
    color: var(--green);
  }

  p {
    margin: 0 0 10px 10px;
  }

  ul {
    padding: 0;
  }
  li {
    color: var(--slate);
    list-style-type: circle;
  }
  svg {
    margin-bottom: 10px;
    color: var(--green);
    height: 15px;
    width: 15px;
  }
`
const SecondaryTitle = styled.p`
  color: var(--slate);
  font-size: 14px;
  font-family: sfmono;
`

function CareerInfo({ jobNum }) {
  return (
    <div>
      {jobNum === 1 ? (
        <CareerInfoContainer>
          <h1>
            {data[0].position}
            <Link to="#projects"> @ {data[0].companyName}</Link>
          </h1>
          <SecondaryTitle>
            {data[0].location} | {data[0].dates}
          </SecondaryTitle>
          <ul>
            {data[0].tasks.map((el, i) => (
              <li key={i}>
                <p>{el}</p>
              </li>
            ))}
          </ul>
        </CareerInfoContainer>
      ) : jobNum === 2 ? (
        <CareerInfoContainer>
          <h1>
            {data[1].position}
            <Link to="https://www.fosterandpartners.com" target="_blank">
              {" "}
              @ {data[1].companyName}
            </Link>
          </h1>
          <SecondaryTitle>
            {data[1].location} | {data[1].dates}
          </SecondaryTitle>
          <ul>
            {data[1].tasks.map((el, i) => (
              <li key={i}>
                <p>{el}</p>
              </li>
            ))}
          </ul>
        </CareerInfoContainer>
      ) : (
        jobNum === 3 && (
          <CareerInfoContainer>
            <h1>
              {data[2].position}
              <Link to="https://bdp-pattern.com" target="_blank">
                {" "}
                @ {data[2].companyName}
              </Link>
            </h1>
            <SecondaryTitle>
              {data[2].location} | {data[2].dates}
            </SecondaryTitle>
            <ul>
              {data[2].tasks.map((el, i) => (
                <li key={i}>
                  <p>{el}</p>
                </li>
              ))}
            </ul>
          </CareerInfoContainer>
        )
      )}
    </div>
  )
}

export default CareerInfo
