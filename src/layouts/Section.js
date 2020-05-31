import React from 'react';
import styled from "styled-components";

const StyledSection = styled.div`
    margin: .4rem 0rem;
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : "row"};
    justify-content: ${props => props.justify ? props.justify : "flex-start"};
    align-items: ${props => props.align ? props.align : "flex-start"};
`;

function Section(props) {
    return (
        <StyledSection direction={props.direction} justify={props.justify} align={props.align} style={props.style}>
            {props.children}
        </StyledSection>
    );
}

export default Section;
