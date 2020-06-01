import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
    margin-top: 0.5rem;
    width: 100%;
    
    input {
        width: 100%;
        padding: 0.8rem 1.6rem;
        margin: 0.4rem 0 0.5rem 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 2px;
    }
`;

/* 
    * id: string
    * label: string
    * value: any
    * placeholder: string
    * onChange: (value) => {}
    */

const TextField = (props) => {

    const { id, label, value, placeholder } = props;

    const onChange = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <StyledLabel htmlFor={id}>
            {label}
            <input type="text" name={id} placeholder={placeholder} value={value} onChange={onChange} />
        </StyledLabel>
    );
}

export default TextField;