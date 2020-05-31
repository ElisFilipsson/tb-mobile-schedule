import React from "react";
import styled from "styled-components";

const StyledHero = styled.div`
    width: 100vw;
    background-color: #28576e;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Hero(props) {

    return (
        <StyledHero>
            {props.children}
        </StyledHero>
    );
}

export default Hero;