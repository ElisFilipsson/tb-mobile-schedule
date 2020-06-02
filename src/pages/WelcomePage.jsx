import React, { useState, useEffect } from "react";
import "./app.css";
import { Button, Checkbox, Headline, Scheduler, Modal, Dialog, TextField, Loader } from "../components";
import { Section } from "../layouts";
import usePatient from "../hooks/usePatient";
import { useParams, useHistory } from "react-router-dom";
import { routes } from "../shared/variabels";
import translation from "../locales/translation.json";
import { withNamespaces } from 'react-i18next';

function WelcomePage(props) {

    const { t } = props;
    const history = useHistory();

    const { hash } = useParams();
    const { isLoading, isUpdating, getPatient, loadPatient, updateContactsForPatient } = usePatient();

    useEffect(() => {
        loadPatient(hash);
    }, [hash]);

    const [confirmedGdpr, setConfirmedGdpr] = useState(false);
    const [selection, setSelection] = useState(null);

    const [isContactsVisible, setIsContactsVisible] = useState(false);
    const [isTermsVisible, setIsTermsVisible] = useState(false);

    const user = getPatient();

    const [firstName, setFirstName] = useState("");
    const [cellphone, setCellphone] = useState("");

    const onClickConfirm = () => {
        props.onConfirm(user?.cellphone, selection);
        history.push(routes.confirmed);
    };

    const onSelectionChanged = (weekdays, interval) => {
        setSelection({ weekdays, ...interval });
    };

    const renderHeader = () => {
        return (
            <Section direction="column">
                <Headline
                    size="xl"
                    title={t(translation.welcomepage.hello, { name: user?.firstName })}
                    text={t(translation.welcomepage.hello, { name: user?.firstName })} />
            </Section>);
    };

    const renderContactNumber = () => {
        return (
            <Section direction="column">
                <Section direction="row" style={{ marginBottom: "0px" }}>
                    <Headline
                        size="sm"
                        weight="bold"
                        title={t(translation.welcomepage.cellphone_number)}
                        text={t(translation.welcomepage.cellphone_number)} />
                    <Headline
                        style={{ marginLeft: ".4rem" }}
                        size="sm"
                        title={user?.cellphone}
                        text={user?.cellphone} />
                </Section>

                <Button
                    onClick={showContacts}
                    type="text"
                    text={t(translation.welcomepage.incorrect_contacts)}
                    title={t(translation.welcomepage.incorrect_contacts)} />
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
                        title={t(translation.welcomepage.welcome_study)}
                        text={t(translation.welcomepage.welcome_study)} />
                </Section>

                <Section>
                    <p>{t(translation.welcomepage.info_explanation)}</p>
                </Section>
            </>);
    };

    const renderGDPRConsent = () => {
        return (
            <Checkbox id="gdpr" checked={confirmedGdpr} onCheckedChange={setConfirmedGdpr} style={{ marginTop: "1rem" }}>
                <p>{t(translation.welcomepage.gdpr)}<Button
                    onClick={showTerms}
                    type="text"
                    text={t(translation.welcomepage.gdpr_the_terms)}
                    title={t(translation.welcomepage.gdpr_the_terms)} />.</p>
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
                <p>{t(translation.welcomepage.update_name_number)}</p>
                <TextField
                    id="firstName"
                    label={t(translation.welcomepage.firstName)}
                    placeholder={user?.firstName}
                    value={firstName}
                    onChange={setFirstName} />
                <TextField
                    id="cellphone"
                    label={t(translation.welcomepage.cellphone_number)}
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
                        title={t(translation.welcomepage.terms_of_service)}
                        text={t(translation.welcomepage.terms_of_service)} />
                    <p style={{ marginTop: "1rem" }}>{t(translation.welcomepage.lorem_ipsum)}</p>
                </Section>
            </Modal>);
    };

    return (
        <>
            <Loader isLoading={isLoading || isUpdating} />
            {renderHeader()}
            {renderContactNumber()}
            {renderInformationalText()}
            <Scheduler onSelectionChanged={onSelectionChanged} />
            {renderGDPRConsent()}
            <Button
                onClick={onClickConfirm}
                type="primary"
                disabled={!confirmedGdpr}
                fullwidth={true}
                text={t(translation.welcomepage.confirm_contacts)}
                title={t(translation.welcomepage.confirm_contacts)} />
            {renderContacts()}
            {renderTerms()}
        </>
    );
}

export default withNamespaces()(WelcomePage);