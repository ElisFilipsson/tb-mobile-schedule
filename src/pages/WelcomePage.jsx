import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./app.css";
import { Button, Checkbox, Headline, Scheduler, Modal, Dialog, TextField } from "../components";
import { Section } from "../layouts";
import usePatient from "../hooks/usePatient";
import { useParams, useHistory } from "react-router-dom";
import { routes } from "../shared/variabels";

function WelcomePage(props) {
    const history = useHistory();

    const { hash } = useParams();
    const { isLoading, isUpdating, getPatient, loadPatient, updateContactsForPatient } = usePatient();

    useEffect(() => {
        loadPatient(hash);
    }, [hash]);

    const [confirmedGdpr, setConfirmedGdpr] = useState(false);
    const [selection, setSelection] = useState([]);

    const [isContactsVisible, setIsContactsVisible] = useState(false);
    const [isTermsVisible, setIsTermsVisible] = useState(false);

    const user = getPatient();

    const [firstName, setFirstName] = useState("");
    const [cellphone, setCellphone] = useState("");

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
                    onClick={showContacts}
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
                    onClick={showTerms}
                    type="text"
                    text="villkoren"
                    title="villkoren" />.</p>
            </Checkbox>
        );
    };

    const showContacts = () => {
        setIsContactsVisible(true);
    };

    const hideContacts = () => {
        setIsContactsVisible(false);
    };

    const updateContacts = () => {
        updateContactsForPatient(hash, firstName, cellphone);
        hideContacts();
    };

    const renderContacts = () => {
        return (
            <Dialog
                isOpen={isContactsVisible}
                onClose={hideContacts}
                onAction={updateContacts}
                title="Uppdatera dina uppgifter">
                <p>Update your firstname and cellphone number.</p>
                <TextField
                    id="firstName"
                    label="Förnamn"
                    placeholder={user?.firstName}
                    value={firstName}
                    onChange={setFirstName} />
                <TextField
                    id="cellphone"
                    label="Mobil"
                    placeholder={user?.cellphone}
                    value={cellphone}
                    onChange={setCellphone} />
            </Dialog >);
    };

    const showTerms = () => {
        setIsTermsVisible(true);
    };

    const hideTerms = () => {
        setIsTermsVisible(false);
    };

    const renderTerms = () => {
        return (
            <Modal
                isOpen={isTermsVisible}
                onClose={hideTerms}>
                <Section direction="column" style={{ margin: "1rem" }}>
                    <Headline

                        size="m"
                        title="Terms of service"
                        text="Terms of service" />
                    <p style={{ marginTop: "1rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a dui sed elit egestas dictum sed non tellus. Nulla finibus odio a lectus luctus mattis a et dui. Nam mi risus, imperdiet non dui ut, volutpat condimentum turpis. Proin pretium vestibulum ultrices. Nullam tincidunt elementum vulputate. In id massa ut nulla laoreet finibus. Curabitur nec augue eu libero aliquam sollicitudin. Morbi sed augue vitae nisl posuere pulvinar. Cras semper varius lorem, id vulputate metus gravida vitae.
                    Donec sem velit, ullamcorper ut ultricies lobortis, efficitur accumsan dolor. Proin cursus, diam at fringilla efficitur, urna tellus euismod lectus, in eleifend orci massa in risus. Integer pulvinar viverra nunc in cursus. Phasellus sed egestas risus. Cras hendrerit, nisi ut porta pellentesque, sapien justo consectetur libero, vel mattis velit quam at nibh. Sed faucibus tincidunt sapien, at vulputate mauris iaculis eu.
                    Sed est tellus, venenatis vestibulum fermentum vel, molestie vel quam. Duis laoreet, est non consequat tempus, enim odio sollicitudin lacus, quis vestibulum neque neque ut dui. Morbi mauris purus, pulvinar vitae scelerisque eu, maximus id sem. Nunc rutrum congue leo accumsan pharetra. Quisque sed sagittis quam. Phasellus vitae condimentum ligula, eget placerat metus. Aenean interdum urna nec eros fermentum, sit amet viverra mauris placerat. Nullam lacinia tempus quam, ut volutpat mauris pellentesque id.
                    Mauris vel ipsum eu arcu laoreet tempus. Quisque luctus mollis viverra. Aliquam sit amet ex facilisis, pharetra ligula id, malesuada odio. Vestibulum sodales neque ut imperdiet iaculis. Nam ullamcorper volutpat ex, condimentum viverra magna gravida a. Maecenas tempor cursus consequat. Phasellus ut malesuada sapien. Curabitur mauris purus, pharetra in sem in, convallis porttitor turpis. Morbi eu lectus auctor, rutrum justo quis, pretium ante. Donec dictum condimentum sodales. Duis pretium aliquam nunc, quis tincidunt lorem vulputate nec.
                    Mauris pellentesque id lorem ac auctor. Donec eu eleifend augue. Morbi consectetur leo id erat dictum tincidunt. Nunc lacinia felis urna, ut finibus mauris rhoncus et. Duis facilisis tortor sed est tincidunt ornare. Morbi ut pellentesque felis. Sed ac placerat lacus, efficitur posuere purus. Nulla hendrerit mi dui, sed mollis lacus malesuada quis. Quisque malesuada, sapien ut ultrices fringilla,
                massa diam molestie urna, sit amet malesuada nulla arcu ac tellus. Suspendisse commodo arcu nisl, vitae tincidunt tellus viverra pulvinar. Sed elit ipsum, pharetra sit amet est vitae, lacinia interdum enim. Nunc nisi ligula, tincidunt vel posuere eu, viverra nec orci.</p>
                </Section>
            </Modal>);
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
            {renderContacts()}
            {renderTerms()}
        </>
    );
}

export default WelcomePage;