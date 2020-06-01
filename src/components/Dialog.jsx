import React from "react";
import { Button, Headline, Modal } from ".";
import { Section } from "../layouts";

/* Props
    * isOpen: boolean
    * onClose: () => void
    * onAction: () => void
    * children: any
    * title: string
    */

function Dialog(props) {
    return (
        <Modal isOpen={props.isOpen}>
            <Section direction="column">
                <Section direction="row" justify="space-between" align="center" style={{ width: "100%" }}>
                    {props.title && <Headline
                        style={{ margin: "0.4rem 1rem" }}
                        size="sm"
                        weight="bolder"
                        title={props.title}
                        text={props.title} />}
                </Section>
                <Section direction="column" style={{ margin: "1rem" }}>
                    {props.children}
                </Section>
                <Section direction="row" justify="space-around" style={{ width: "100%" }}>
                    <Button
                        type="text"
                        style={{ fontWeight: "bold" }}
                        title="Avbryt"
                        text="Avbryt"
                        onClick={props.onClose} />
                    <Button
                        type="text"
                        style={{ fontWeight: "bold" }}
                        title="Klart"
                        text="Klart"
                        onClick={props.onAction} />
                </Section>
            </Section>
        </Modal>
    );
}

export default Dialog;