import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    margin: 1rem;
    height: 100%;

    @media screen and (min-width: 800px) {
        margin: 1rem 5rem;
    }
    @media screen and (min-width: 1200px) {
        margin: 1rem 10rem;
    }
`;

function Container(props) {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
}

export default Container;
