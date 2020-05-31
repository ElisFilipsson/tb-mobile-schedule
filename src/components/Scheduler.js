import React from "react";
import styled from "styled-components";

const StyledScheduler = styled.div`
    height: 2vw;
    border: 1px solid grey;
`;
/* 
    * title: string (optional)
    * days: []
    * startTime: string
    * endTime: string
    */

function Scheduler(props) {

    const daysDidChange = (selection) => {
    };

    const timeDidChange = (start, end) => {
    };

    return (
        <StyledScheduler>

        </StyledScheduler>
    );
}

export default Scheduler;