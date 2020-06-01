import React from "react";
import { Headline } from "../components";
import { Section } from "../layouts";

function NotFoundPage() {
    return (
        <>
            <Section direction="column" style={{ marginTop: "1rem" }}>
                <Headline
                    size="xl"
                    title="404"
                    text="404" />
                <Headline
                    style={{ marginTop: "1rem" }}
                    size="xl"
                    title="Ops! We couldn't find the page you where looking for..."
                    text="Ops! We couldn't find the page you where looking for..." />
                <p> An error occured trying to get your data. Have you entered the correct web address?</p>
            </Section>
        </>
    );
}

export default NotFoundPage;