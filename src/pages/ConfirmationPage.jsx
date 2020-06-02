import React from "react";
import { Headline } from "../components";
import { Section } from "../layouts";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { routes } from "../shared/variabels";
import { defaultWeekdays } from "../shared/variabels";
import translation from "../locales/translation.json";
import { withNamespaces } from 'react-i18next';

const StyledText = styled.p`
    margin-top: 1rem;
`;

const StyledIndentation = styled.p`
    margin-top: 1rem;
    margin-left: 1rem;
`;

function Confirmation(props) {
    const history = useHistory();

    const { t, number, doNotDisturb } = props;

    const renderConfirmation = () => {
        if (!doNotDisturb) {
            history.push(routes.catchAll);
            return;
        }
        const dndWeekDays = doNotDisturb.weekdays.sort((a, b) => a.position - b.position).map(day => day.name);

        const weekdaysForContact = defaultWeekdays.sort((a, b) => a.position - b.position)
            .filter(weekday => !dndWeekDays.includes(weekday.name))

    return (
        <Section direction="column" style={{ marginTop: "1rem" }}>
            <Headline
                size="xl"
                title={t(translation.confirmationpage.thank_you)}
                text={t(translation.confirmationpage.thank_you)} />
            <p></p>
            <StyledText>{t(translation.confirmationpage.phone_contact)}</StyledText>
            <StyledIndentation>{number}</StyledIndentation>
            <StyledText>{t(translation.confirmationpage.time_contact)}</StyledText>
            <StyledIndentation>
                {dndWeekDays.map(day => `${t(translation.shared[day])}, `)}
                {doNotDisturb.endTime.hours}:{doNotDisturb.endTime.minutes} - {doNotDisturb?.startTime.hours}:{doNotDisturb?.startTime.minutes}<br />
                {weekdaysForContact.map(day => `${t(translation.shared[day.name])}, `)} {dndWeekDays.length && t(translation.shared.allTimes)}
            </StyledIndentation>
        </Section>
    );
};

return (
    <>
        {renderConfirmation()}
    </>
);
}

export default withNamespaces()(Confirmation);