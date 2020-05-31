import React, { useState } from "react";
import { Button } from ".";
import styled from "styled-components";

/* Props
    * children: any
    * closeBtn: boolean
    */

const StyledModal = styled.div`
  max-width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: ${props => props.isOpen ? "-2rem 2rem 2rem rgba(black, 0.2)" : "1rem 0 0 rgba(black, 0.2)"};
  filter: ${props => props.isOpen ? "blur(0)" : "blur(8px)" };
  transform: ${props => props.isOpen ? "scale(1)" : "scale(0.33)"};  
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? "visible" : "hidden"}
`;

function Modal(props) {

    const [isOpen, setIsOpen] = useState(false);
    const { closeBtn } = props;
    
    const onClose = (event) => {
        setIsOpen(false);
    };

    return (
        <StyledModal isOpen>
            <header>
                {closeBtn && <Button>Hello</Button>}
            </header>
            {props.children}
        </StyledModal>
    );
}

export default Modal;