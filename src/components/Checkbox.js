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
        top: 0.5rem;
        left: 0;
        height: 1.25rem;
        width: 1.25rem;
        background-color: #ccc;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
        left: 0.3rem;
        top: 0rem;
        width: 0.6rem;
        height: 0.9rem;
        border: solid white;
        border-width: 0 0.2rem 0.2rem 0;
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

const Checkbox = (props) => {

  const { id, checked } = props;

  const onChange = (event) => {
    props.onCheckedChange(event.target.checked);
  };

  return (
    <StyledLabel htmlFor={id}>{props.children}
      <input type="checkbox" name={id} id={id} defaultChecked={checked ? 'checked' : null} onChange={onChange} />
      <span className="checkmark" />
    </StyledLabel>
  );
}

export default Checkbox;