import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.section`
    padding: 15px 0 20px 0;

    .active {
        border-bottom: 2px solid var(--green);
        background: var(--light-navy);
    }

    .not-active {
        border-bottom: 2px solid var(--slate);
        opacity: 0.5;
    }

    span {
        color: var(--slate);
        width: 80px;
    }

    @media (min-width: 481px) {
        display: none;
    }

    @media (max-width: 480px) {
        display: flex;
    }
`;

const CareerItemContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100vw / 3);
    z-index: 5;
    text-align: center;
    cursor: pointer;
`;

interface CareerTopMenuPropTypes {
    jobNum: number;
    setJobNum: (arg: number) => void;
}

function CareerTopMenu({ jobNum, setJobNum }: CareerTopMenuPropTypes) {
    return (
        <MainContainer>
            <CareerItemContainer
                onClick={() => setJobNum(1)}
                className={jobNum === 1 ? 'active' : 'not-active'}
            >
                <span>NBC Universal</span>
            </CareerItemContainer>
            <CareerItemContainer
                onClick={() => setJobNum(2)}
                className={jobNum === 2 ? 'active' : 'not-active'}
            >
                <span>Freelance</span>
            </CareerItemContainer>
            <CareerItemContainer
                onClick={() => setJobNum(3)}
                className={jobNum === 3 ? 'active' : 'not-active'}
            >
                <span>Foster & Partners</span>
            </CareerItemContainer>
        </MainContainer>
    );
}

export default CareerTopMenu;
