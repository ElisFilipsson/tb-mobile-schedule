import React, { useState, useEffect } from "react";
import "./app.css";
import { Button, Checkbox, Headline, Scheduler } from "../components";
import { Section } from "../layouts";
import usePatient from "../hooks/usePatient";
import { useParams, useHistory } from "react-router-dom";
import { routes } from "../shared/variabels";

function WelcomePage(props) {
    const history = useHistory();

    const { hash } = useParams();
    const { isLoading, getPatient, loadPatient } = usePatient();

    useEffect(() => {
        loadPatient(hash);
    }, [hash]);

    const [confirmedGdpr, setConfirmedGdpr] = useState(false);
    const [selection, setSelection] = useState([]);

    const user = getPatient();

    const onClickIncorrectContacts = () => {
        console.log("Click for correction of contacts");
    };

    const onClickShowTerms = () => {
        console.log("Open modal and show terms.")
    };

    const onClickConfirm = () => {
        props.onConfirm(user?.cellphone, selection);
        history.push(routes.confirmed);
    };

    const renderHeader = () => {
        return (
            <Section direction="column">
                <Headline
                    size="xl"
                    title={"Hej " + user?.firstName}
                    text={"Hej " + user?.firstName} />
            </Section>);
    };

    const renderContactNumber = () => {
        return (
            <Section direction="column">
                <Section direction="row" style={{ marginBottom: "0px" }}>
                    <Headline
                        size="sm"
                        weight="bold"
                        title="Mobilnummer"
                        text="Mobilnummer" />
                    <Headline
                        style={{ marginLeft: ".4rem" }}
                        size="sm"
                        title={user?.cellphone}
                        text={user?.cellphone} />
                </Section>

                <Button
                    onClick={onClickIncorrectContacts}
                    type="text"
                    text="Mina uppgifter stämmer inte"
                    title="Mina uppgifter stämmer inte" />
            </Section>
        );
    };

    const renderInformationalText = () => {
        return (
            <>
                <Section direction="column" style={{ marginTop: "1rem" }}>
                    <Headline
                        size="m"
                        weight="bolder"
                        title="Välkommen till studien!"
                        text="Välkommen till studien!" />
                </Section>

                <Section>
                    <p>
                        För att vi ska kunna ge dig en så bra upplevelse som möjligt så vill vi att du ska fylla i när du inte vill bli störd, bekräfta uppgifterna vi har om dig och godkänna avtalet.
                    </p>
                </Section>
            </>);
    };

    const renderGDPRConsent = () => {
        return (
            <Checkbox id="gdpr" checked={confirmedGdpr} onCheckedChange={setConfirmedGdpr} style={{ marginTop: "1rem" }}>
                <p>Genom att klicka in rutan godkänner du att vi sparar din data enligt GDPR och att du läst och förstått <Button
                    onClick={onClickShowTerms}
                    type="text"
                    text="villkoren"
                    title="villkoren" />.</p>
            </Checkbox>
        );
    };

    return (
        <>
            {renderHeader()}
            {renderContactNumber()}
            {renderInformationalText()}
            <Scheduler selection={selection} onSelectionChanged={setSelection} />
            {renderGDPRConsent()}
            <Button
                onClick={onClickConfirm}
                type="primary"
                disabled={!confirmedGdpr}
                fullwidth={true}
                text="Bekräfta uppgifterna"
                title="Bekräfta uppgifterna" />
        </>
    );
}

export default WelcomePage;