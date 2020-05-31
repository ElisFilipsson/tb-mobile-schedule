import React, { useState } from "react";
import { Button, Headline, Modal } from ".";
import { Section } from "../layouts";
import styled from "styled-components";

/* Props
    * isOpen: boolean
    * onClose: () => void
    * onAction: () => void
    * closeBtn: boolean
    * children: any
    * title: string
    */

const StyledModal = styled.div`
   display:flex;
   border-bottom: 1px solid #ccc;
   width: 80%;
   border-radius: 2px;
   min-height: 250px;
   height: auto;
   top:50%;
   left:50%;
   transform: translate(-50%,-50%);
   display: flex;
`;

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
                    {props.closeBtn && <Button
                        style={{ margin: "0.4rem 1rem" }}
                        onClick={props.onClose}
                        type="text"
                        text="x"
                        title="Stäng fönster" />}
                </Section>
                <Section direction="column" style={{ margin: "1rem" }}>
                    {props.children}
                </Section>
                <Section direction="row" justify="space-around" align="center" style={{ width: "100%" }}>
                    <Button
                        onClick={props.onClose}
                        type="light"
                        text="Stäng"
                        title="Stäng" />
                    <Button
                        onClick={props.onAction}
                        type="primary"
                        text="OK"
                        title="OK" />
                </Section>
            </Section>
        </Modal>
    );
}

export default Dialog;