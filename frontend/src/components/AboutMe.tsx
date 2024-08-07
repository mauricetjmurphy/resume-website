import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import { FaReact } from 'react-icons/fa';
import {
    SiNodedotjs,
    SiNextdotjs,
    SiTypescript,
    SiAmazonaws,
    SiTerraform,
    SiGithubactions,
    SiKubernetes,
    SiGo,
    SiGin,
    SiMysql,
    SiDocker,
} from 'react-icons/si';

const AboutMeContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 100px 0px;
    max-width: 900px;

    .gatsby-image-wrapper {
        margin: 0 auto !important;
        width: inherit !important;
        height: inherit !important;
    }

    @media (max-width: 768px) {
        max-width: 700px;
    }

    @media (max-width: 480px) {
        padding: 50px 0;
        margin: 0 5%;
    }
`;

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 50px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
        margin: 0;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        padding: 0;
        margin: 0 auto;
    }
`;

const TextContainer = styled.div`
    width: 50%;
    padding-right: 25px;

    @media (max-width: 480px) {
        width: 100%;
        margin: 0 auto;
        padding: 0px;
    }
`;

const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    padding: 32px;

    @media (max-width: 768px) {
        padding: 0;
        margin: 20px 0 0 20px;
        height: 250px;
        width: 250px;
    }

    @media (max-width: 480px) {
        width: 250px;
        height: 250px;
        padding: 20px 0;
        margin: 0 auto;
    }

    img {
        border-radius: 12px;
        height: 100%;
        width: 100%;

        @media (max-width: 768px) {
            padding: 0;
        }

        @media (max-width: 480px) {
            padding: 0;
            margin: 0 auto;
        }
    }
`;

const MainText = styled.p`
    font-size: 20px;
    color: var(--slate);

    @media (max-width: 480px) {
        font-size: 18px;
        letter-spacing: 0.5px;
    }
`;

const Technologies = styled.div`
    width: 100%;
    padding: 0 50px;
    margin: 0 auto;

    p {
        color: var(--slate);
        text-align: center;
        width: 90%;
        margin: 20px auto;
        padding-top: 30px;
    }

    @media (max-width: 768px) {
        padding: 0;
    }

    @media (max-width: 480px) {
        max-width: 90%;
        text-align: center;
    }

    span {
        color: var(--slate);
        font-size: 14px;
        font-family: sfmono;

        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
        }
        @media (max-width: 480px) {
            justify-content: center;
            text-align: center;
        }
        @media (max-width: 350px) {
            font-size: 12px;
        }
    }
`;

const TechItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        min-height: 90px;
    }

    span {
        @media (max-width: 768px) {
            padding-top: 5px;
        }
    }
`;

const techIconContainer = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
};

const icon = {
    color: 'var(--green)',
};

function AboutMe() {
    return (
        <>
            <AboutMeContainer id="about">
                <Title number={'00.'} title={'About Me'} />
                <MainContainer>
                    <TextContainer>
                        <div>
                            <MainText>
                                Hello! My name is Maurice and I am an
                                experienced software engineer with a passion for
                                developing applications and creating innovative
                                solutions. My background in computer science,
                                artificial intelligence, and machine learning,
                                combined with my skills in multiple tech stacks,
                                including Python, Flask, Django, React, and
                                TypeScript, have allowed me to excel in various
                                roles, from software engineer at NBC Universal
                                to Freelance software engineer and Architectural
                                BIM Technologist at Foster & Partners.
                                <br></br>
                                <br></br>
                                My portfolio and personal projects showcases my
                                ability to design, develop, and deploy web
                                applications, e-commerce websites, and machine
                                learning models. I am also skilled in design
                                tools such as Balsamiq, Figma, and Adobe. I am
                                an effective communicator, a strategic thinker
                                and continuously motivated to improve my skills
                                and further my success in this field.
                            </MainText>
                        </div>
                    </TextContainer>
                    <ImageContainer>
                        <img
                            src="../images/profile_greyscale.jpg"
                            alt="Profile image"
                        />
                    </ImageContainer>
                </MainContainer>
                <Technologies>
                    <p>
                        Here are a few technologies I've been working with
                        recently:
                    </p>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '25%' }}>
                            <TechItemContainer>
                                <span style={techIconContainer}>
                                    <SiNodedotjs style={icon} />
                                </span>
                                <span>Node JS</span>
                            </TechItemContainer>
                            <TechItemContainer>
                                <span style={techIconContainer}>
                                    <SiTypescript style={icon} />
                                </span>
                                <span>TypeScript</span>
                            </TechItemContainer>
                            <TechItemContainer>
                                <span style={techIconContainer}>
                                    <FaReact style={icon} />
                                </span>
                                <span>React</span>
                            </TechItemContainer>
                        </div>
                        <div style={{ width: '25%' }}>
                            <TechItemContainer>
                                <span style={techIconContainer}>
                                    <SiTerraform style={icon} />
                                </span>
                                <span>Terraform</span>
                            </TechItemContainer>
                            <TechItemContainer>
                                <span style={techIconContainer}>
                                    <SiGithubactions style={icon} />
                                </span>
                                <span>GitHub Actions</span>
                            </TechItemContainer>
                            <TechItemContainer>
                                <span style={techIconContainer}>
                                    <SiNextdotjs style={icon} />
                                </span>
                                <span>NextJS</span>
                            </TechItemContainer>
                        </div>

                        <div style={{ width: '25%' }}>
                            <TechItemContainer>
                                <span style={techIconContainer}>
                                    <SiAmazonaws style={icon} />
                                </span>
                                <span>AWS</span>
                            </TechItemContainer>
                            <TechItemContainer>
                                <span style={techIconContainer}>
                                    <SiKubernetes style={icon} />
                                </span>
                                <span>Kubeernetes</span>
                            </TechItemContainer>
                            <TechItemContainer>
                                <span style={techIconContainer}>
                                    <SiGo style={icon} />
                                </span>
                                <span>Golang</span>
                            </TechItemContainer>
                        </div>
                        <div style={{ width: '25%' }}>
                            <TechItemContainer>
                                <span style={techIconContainer}>
                                    <SiGin style={icon} />
                                </span>
                                <span>Golang Gin</span>
                            </TechItemContainer>
                            <TechItemContainer>
                                <span style={techIconContainer}>
                                    <SiMysql style={icon} />
                                </span>
                                <span>MySQL</span>
                            </TechItemContainer>
                            <TechItemContainer>
                                <span style={techIconContainer}>
                                    <SiDocker style={icon} />
                                </span>
                                <span>Docker</span>
                            </TechItemContainer>
                        </div>
                    </div>
                </Technologies>
            </AboutMeContainer>
        </>
    );
}

export default AboutMe;
