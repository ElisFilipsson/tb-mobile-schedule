import React from "react";
import styled from "styled-components";

/* Props
    * isOpen: boolean
    * onClose: () => void
    * children: any
    */

const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    display: ${props => props.isOpen === true ? "block" : "none"}
`;

const StyledModal = styled.div`
        position: fixed;
        background: white;
        min-width: 300px;
        width: auto;
        max-width: 80%;
        border-radius: 2px;
        min-height: 250px;
        height: auto;
        max-height: 90%;
        overflow-x: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
`;

function Modal(props) {
    return (
        <StyledBackdrop isOpen={props.isOpen} onClick={props.onClose}>
            <StyledModal onClick={(e) => e.stopPropagation()}>
                {props.children}
            </StyledModal>
        </StyledBackdrop>
    );
}

export default Modal;