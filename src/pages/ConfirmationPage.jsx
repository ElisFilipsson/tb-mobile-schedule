import React from "react";
import { Headline } from "../components";
import { Section } from "../layouts";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { routes } from "../shared/variabels";
import { defaultWeekdays } from "../shared/variabels";

const StyledText = styled.p`
    margin-top: 1rem;
`;

const StyledIndentation = styled.p`
    margin-top: 1rem;
    margin-left: 1rem;
`;

function Confirmation(props) {
    const history = useHistory();

    const { number, doNotDisturb } = props;

    const renderConfirmation = () => {
        if (!doNotDisturb) {
            history.push(routes.catchAll);
            return;
        }
        const dndWeekDays = doNotDisturb.weekdays.map(day => day.name);

        const weekdaysForContact = defaultWeekdays
            .filter(weekday => !dndWeekDays.includes(weekday.name))

        return (
            <Section direction="column" style={{ marginTop: "1rem" }}>
                <Headline
                    size="xl"
                    title="Tack"
                    text="Tack" />
                <p>...för att du vill vara med i studien. Vi kommer att kontakta dig så snart studien startar.</p>
                <StyledText>Telefonnummer vi kommer att kontakta dig på</StyledText>
                <StyledIndentation>{number}</StyledIndentation>
                <StyledText>Tider då vi kontaktar dig</StyledText>
                <StyledIndentation>
                    {weekdaysForContact.map((day, index) => `${day.name}${index !== weekdaysForContact.length - 1 ? ", " : " "}`)}
                    {doNotDisturb.endTime.hours}:{doNotDisturb.endTime.minutes} - {doNotDisturb?.startTime.hours}:{doNotDisturb?.startTime.minutes}</StyledIndentation>
            </Section>
        );
    };

    return (
        <>
            {renderConfirmation()}
        </>
    );
}

export default Confirmation;