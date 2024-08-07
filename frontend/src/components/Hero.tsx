import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const HeroContainer = styled.section`
    margin: 0px 5%;
    padding: 200px 0px 0px 0px;
    max-width: 1000px;

    @media screen and (max-width: 1000px) {
        padding: 200px 0px 0px 0px;
    }

    @media screen and (max-width: 480px) {
        margin: 0px 6%;
        padding: 100px 0 0 0;
    }

    h1 {
        @media screen and (max-width: 1000px) {
            font-size: clamp(40px, 8vw, 80px);
        }

        @media screen and (max-width: 480px) {
            margin: 10px 0;
            letter-spacing: 0;
        }
    }

    p.personal-statement {
        font-size: 80px;
        line-height: 60px;
        font-family: calibre-semibold;
        color: var(--slate);
        letter-spacing: 2px;
        margin: 0;
        padding-bottom: 30px;

        @media screen and (max-width: 1000px) {
            font-size: clamp(20px, 9vw, 80px);
        }

        @media screen and (max-width: 768px) {
        }

        @media screen and (max-width: 480px) {
            line-height: 38px;
            letter-spacing: 0;
            width: 70%;
        }
    }

    p.personal-description {
        width: 60%;
        color: var(--slate);
        font-size: 20px;

        @media screen and (max-width: 1286px) {
            margin: 0;
        }

        @media screen and (max-width: 1024px) {
            width: 80%;
        }
        @media screen and (max-width: 480px) {
            font-size: 18px;
            line-height: 20px;
            letter-spacing: 0.5px;
            margin: 0 0 10px 0;
        }
    }

    img {
        cursor: pointer;

        @media (min-width: 768px) {
            padding-top: 50px;
        }
        @media screen and (max-width: 480px) {
            padding-top: 50px !important;
        }
    }
`;

const linkItem = {
    height: '50px',
};

const Hero = () => {
    return (
        <HeroContainer id="hero">
            <h2>Hi, my name is</h2>
            <h1>Maurice Murphy.</h1>
            <p className="personal-statement">I develop things for the web.</p>
            <p className="personal-description">
                I'm a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I'm focused on building accessible, human-centered
                products that everybody can use.
            </p>

            <span style={{ marginTop: '20px' }}>
                <Link smooth={true} duration={1000} style={linkItem} to="about">
                    <img
                        src="../images/down-arrow.svg"
                        width={40}
                        alt="down arrow"
                    />
                </Link>
            </span>
        </HeroContainer>
    );
};

export default Hero;
