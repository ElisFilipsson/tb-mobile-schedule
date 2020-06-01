import React from "react";
import styled from "styled-components";

/* 
    * id: any
    * type: string (primary, text, light)
    * text: string
    * title: string (optional)
    * disabled: boolean
    * smaller: boolean 
    * fullwidth: boolean;
    * onClick: () => {}
    */

const StyledButton = styled.button`
    min-width: 120px;
    border: 1px solid #ccc;
    margin: 0px;
    padding: 0.25em 1em;
    border-radius: 2px;
    display: block;

    :focus {
        outline: none;
    }

    &.is-text {
        background-color: transparent;
        border: none;
        color: #00a8ee;
        padding: 0;
        min-width: auto;
        display: initial;

        :hover:enabled, :active:enabled {
            color: #28576e;
        }

        :disabled, [disabled]{
            color: #666666;
        }
    }

    &.is-light {
        background-color: #fff;

        :disabled, [disabled]{
            background-color: #cccccc;
            color: #666666;
        }
    }

    &.is-primary {
        background-color: #00a8ee;
        border: none;
        color: #fff;
        padding: 0.25em 1em;

        :hover:enabled, :active:enabled {
            background-color: #28576e;
        }
        :disabled, [disabled]{
            background-color: #cccccc;
            color: #666666;
        }
    }

    &.is-fullwidth {
        width: 100%;
        padding: 0.6em 1em;
    }

    &.is-smaller {
        min-width: 40px;
        padding: 0.4rem 0.4rem;
    }
 `;

const Button = (props) => {
    const { id, text, title, disabled, data } = props;

    const onClickedButton = (event) => {
        event.stopPropagation();
        if (props.onClick) {
            props.onClick(data);
        }
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
            style={props.style}
            type="button"
            className={getClass() + (props.fullwidth ? " is-fullwidth" : "") + (props.smaller ? " is-smaller" : "")}
            onClick={onClickedButton}>
            {text}
        </StyledButton>
    );
}

export default Button;