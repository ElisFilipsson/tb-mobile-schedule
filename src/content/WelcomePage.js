import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "./app.css";
import { Button, Checkbox, Headline, Scheduler } from "../components";
import { Hero, Container, Section } from "../layout";

function WelcomePage() {

    const [confirmedGdpr, setConfirmedGdpr] = useState(true);
    const [selection, setSelection] = useState([]);

    const onClickIncorrectContacts = () => {
        console.log("Click for correction of contacts");
    };

    return (
        <>
            <Hero>
                <img src={logo} className="app-logo" alt="logo" />
            </Hero>
            <Container>
                <Section direction="column">
                    <Headline
                        size="xl"
                        title="Hej Bert-Åke"
                        text="Hej Bert-Åke" />
                </Section>

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
                            title="0700 00 00 00"
                            text="0700 00 00 00" />
                    </Section>

                    <Button
                        style={{ marginTop: "-.2rem" }}
                        onClick={onClickIncorrectContacts}
                        type="text"
                        text="Mina uppgifter stämmer inte"
                        title="Mina uppgifter stämmer inte" />
                </Section>

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

                <Scheduler selection={selection} onSelectionChanged={setSelection} />
                <Checkbox id="gdpr" checked={confirmedGdpr} onCheckedChange={setConfirmedGdpr}>
                    <p>Genom att klicka in rutan godkänner du att vi sparar din data enligt GDPR och att du läst och förstått <a href="#">villkoren</a>.</p>
                </Checkbox>
            </Container>
        </>
    );
}

export default WelcomePage;