import React from "react";
import { Headline } from "../components";
import { Section } from "../layouts";
import styled from "styled-components";

const StyledText = styled.p`
    margin-top: 1rem;
`;

const StyledIndentation = styled.p`
    margin-top: 1rem;
    margin-left: 1rem;
`;

function Confirmation(props) {

    const { number, hours } = props;
    return (
        <>
            <Section direction="column" style={{ marginTop: "1rem" }}>
                <Headline
                    size="xl"
                    title="Tack"
                    text="Tack" />
                <p>...för att du vill vara med i studien. Vi kommer att kontakta dig så snart studien startar.</p>
                <StyledText>Telefonnummer vi kommer att kontakta dig på</StyledText>
                <StyledIndentation>{number}</StyledIndentation>
                <StyledText>Tider då vi kontaktar dig</StyledText>
                <StyledIndentation>{hours}</StyledIndentation>
            </Section>
        </>
    );
}

export default Confirmation;