import React from "react";
import { Headline } from "../components";
import { Section } from "../layouts";
import translation from "../locales/translation.json";
import { withNamespaces } from 'react-i18next';

function NotFoundPage({ t }) {
    return (
        <>
            <Section direction="column" style={{ marginTop: "1rem" }}>
                <Headline
                    size="xl"
                    title={t(translation.notfoundpage.notfounderror)}
                    text={t(translation.notfoundpage.notfounderror)} />
                <Headline
                    style={{ marginTop: "1rem" }}
                    size="xl"
                    title={t(translation.notfoundpage.information)} 
                    text={t(translation.notfoundpage.information)} />
                <p>{t(translation.notfoundpage.suggestion)}</p>
            </Section>
        </>
    );
}

export default withNamespaces()(NotFoundPage);