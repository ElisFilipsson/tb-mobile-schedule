import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    :hover input ~ .checkmark {
      background-color: #ccc;
    }
    
    input:checked ~ .checkmark {
      background-color: #2196F3;
    }
    
    input:checked ~ .checkmark:after {
      display: block;
    }
    
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

/* 
    * id: string
    * label: string
    * checked: boolean
    * onCheckedChange: (isChecked) => {}
    */

function Checkbox(props) {

    const { id, checked } = props;

    const onChange = (event) => {
        props.onCheckedChange(event);
        console.log(event);
    };

    return (
        <StyledLabel htmlFor={id}>{props.children}
            <input type="checkbox" name={id} id={id} defaultChecked={checked ? 'checked' : null} onChange={onChange} />
            <span className="checkmark"/>
        </StyledLabel>
    );
}

export default Checkbox;