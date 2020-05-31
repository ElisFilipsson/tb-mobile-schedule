import React from "react";
import { Headline } from "../components";
import { Section } from "../layouts";

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
                <p style={{marginTop: "1rem"}}>Telefonnummer vi kommer att kontakta dig på</p>
                <p style={{marginTop: "1rem", marginLeft: "1rem"}}>{number}</p>
                <p style={{marginTop: "1rem"}}>Tider då vi kontaktar dig</p>
                <p style={{marginTop: "1rem", marginLeft: "1rem"}}>{hours}</p>
            </Section>
        </>
    );
}

export default Confirmation;