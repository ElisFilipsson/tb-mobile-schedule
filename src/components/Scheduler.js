import React, { useState } from "react";
import styled from "styled-components";
import { Section } from "../layouts";
import { Button, Headline } from "../components";

const StyledScheduler = styled.div`
    margin-bottom: 1rem;
`;
/* 
    * title: string (optional)
    * days: []
    * startTime: string
    * endTime: string
    */

function Scheduler(props) {

    const weekdays = [
        { position: 1, name: "Måndag", shortName: "Mån" },
        { position: 2, name: "Tisdag", shortName: "Tis" },
        { position: 3, name: "Onsdag", shortName: "Ons" },
        { position: 4, name: "Torsdag", shortName: "Tors" },
        { position: 5, name: "Fredag", shortName: "Fre" },
        { position: 6, name: "Lördag", shortName: "Lör" },
        { position: 7, name: "Söndag", shortName: "Sön" }
    ];

    const [selectedWeekdays, setSelectedWeekdays] = useState([]);

    const [startTimeInHours, setStartTimeInHours] = useState("23");
    const [startTimeInMin, setStartTimeInMin] = useState("00");
    const [endTimeInHours, setEndTimeInHours] = useState("07");
    const [endTimeInMin, setEndTimeInMin] = useState("00");

    const isDaySelected = (day) => {
        return selectedWeekdays.length && selectedWeekdays.filter(weekday => weekday?.position === day?.position).length;
    };

    const onSelectedDayDidChange = (day) => {
        let oldWeekdays = [...selectedWeekdays];
        console.log("dag", day);
        if (isDaySelected(day)) {
            oldWeekdays = oldWeekdays.filter(oldDay => oldDay.position !== day.position);
            setSelectedWeekdays(oldWeekdays);
        } else {
            oldWeekdays.push(day);
            setSelectedWeekdays(oldWeekdays);
        }
    };

    const onSelectedTimeDidChange = (start, end) => {
    };

    return (
        <StyledScheduler>
            <Section direction="column">
                <Headline
                    style={{ marginTop: "1rem", marginBottom: ".5rem" }}
                    size="sm"
                    weight="bold"
                    title="Välj de tider då du inte vill blir störd"
                    text="Välj de tider då du inte vill blir störd" />
                <Section direction="row" justify="space-between" align="center" style={{ width: "100%" }}>
                    {weekdays.map((day, index) => (
                        <Button
                            key={index}
                            smaller={true}
                            type={isDaySelected(day) ? "primary" : "light"}
                            text={day.shortName}
                            title={day.shortName}
                            data={day}
                            onClick={onSelectedDayDidChange}
                        />)
                    )}
                </Section>

                <Section direction="column">
                    <Headline
                        style={{ marginTop: "1rem" }}
                        size="sm"
                        weight="bold"
                        title="Ställ in schema"
                        text="Ställ in schema" />
                    <p>{startTimeInHours}:{startTimeInMin} - {endTimeInHours}:{endTimeInMin} nästa dag</p>
                </Section>

            </Section>
        </StyledScheduler>
    );
}

export default Scheduler;