import React, { useEffect } from "react";
import styled from "styled-components";
import loader from "../assets/loader.svg"

/* Props
    * isLoading: boolean
    */

const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 2;
    display: ${props => props.isLoading === true ? "block" : "none"}
`;

const StyledLoader = styled.div`
        position: fixed;
        width: auto;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

        svg {
            fill: #fff;
        }
`;

function Loader(props) {
    useEffect(() => {
        props.isLoading ?
            document.body.classList.add("modal-open") :
            document.body.classList.remove("modal-open");
    }, [props.isLoading]);

    return (
        <StyledBackdrop isLoading={props.isLoading} onClick={props.onClose}>
            <StyledLoader>
                <img src={loader} className="spinner" alt="spinner" />
            </StyledLoader>
        </StyledBackdrop >
    );
}

export default Loader;