import React from "react";
import styled from "styled-components";

/* 
    * id: any
    * type: string (primary, text, light)
    * text: string
    * title: string (optional)
    * disabled: boolean
    * onClick: () => {}
    */

const StyledButton = styled.button`
    min-width: 200px;
    border: 1px solid #ccc;
    margin: 0px;
    padding: 0.25em 1em;
    border-radius: 3px;
    display: block;
    font-size: 90%;

    &.is-text {
        background-color: transparent;
        border: none;
        color: #00a8ee;
        padding: 0;
    }
    
    &.is-light {
        background-color: none;
    }
    &.is-primary {
        background-color: none;
    }
 `;

function Button(props) {

    const { id, text, title, disabled } = props;

    const onClickedButton = (event) => {
        console.log(event);
        props.onClick();
    };

    const getClass = () => {
        switch (props.type) {
            case "primary":
                return "is-primary";
            case "text":
                return "is-text";
            case "light":
                return "is-light";
        }
    };

    return (
        <StyledButton
            key={id}
            title={title}
            disabled={disabled}
            type="button"
            className={getClass()}
            onClick={onClickedButton}>
            {text}
        </StyledButton>
    );
}

export default Button;