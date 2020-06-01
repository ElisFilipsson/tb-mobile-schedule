import React, { useState } from "react";
import styled from "styled-components";
import { Section } from "../layouts";
import { Button, Headline, Modal, TimePicker } from ".";

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

    const defaultWeekdays = [
        { position: 1, name: "Måndag", shortName: "Mån" },
        { position: 2, name: "Tisdag", shortName: "Tis" },
        { position: 3, name: "Onsdag", shortName: "Ons" },
        { position: 4, name: "Torsdag", shortName: "Tors" },
        { position: 5, name: "Fredag", shortName: "Fre" },
        { position: 6, name: "Lördag", shortName: "Lör" },
        { position: 7, name: "Söndag", shortName: "Sön" }
    ];
    const defaultHours = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
    const defaultMinutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];


    const [isScheduleVisible, setIsScheduleVisible] = useState(false);
    const [showStartTime, setShowStartTime] = useState(true);

    const [weekdays, setWeekdays] = useState([]);

    const [startTime, setStartTime] = useState({
        hours: "22",
        minutes: "00",
    });

    const [endTime, setEndTime] = useState({
        hours: "07",
        minutes: "00"
    });

    const isDaySelected = (day) => {
        return weekdays.length && weekdays.filter(weekday => weekday?.position === day?.position).length;
    };

    const onSelectedDayDidChange = (day) => {
        let oldWeekdays = [...weekdays];
        if (isDaySelected(day)) {
            oldWeekdays = oldWeekdays.filter(oldDay => oldDay.position !== day.position);
            setWeekdays(oldWeekdays);
        } else {
            oldWeekdays.push(day);
            setWeekdays(oldWeekdays);
        }
    };

    const showSchedule = () => {
        setIsScheduleVisible(true);
    };

    const hideSchedule = () => {
        setIsScheduleVisible(false);
    };

    const onChangeStartTime = (name, value) => {
        console.log(name, value);

        const start = { ...startTime };
        start[name] = value;
        setStartTime(start);
    };

    const onChangeEndTime = (name, value) => {
        console.log(name, value);

        const end = { ...endTime };
        end[name] = value;
        setEndTime(end);
    };

    const confirmSchedule = () => {
        console.log(`${startTime.hours}: ${startTime.minutes} - ${endTime.hours}:${endTime.minutes} nästa dag`);
    };

    const renderSchedule = () => {
        return (
            <Modal
                isOpen={isScheduleVisible}>
                <Section direction="column" justify="space-around" style={{ width: "100%", margin: "0px", }}>
                    <Section direction="row" justify="space-around" style={{ width: "100%" }}>
                        <Button
                            type="text"
                            style={{ fontWeight: "bold", color: showStartTime ? "#00a8ee" : "#ccc" }}
                            title="STARTA"
                            text="STARTA"
                            weight="bold"
                            onClick={() => setShowStartTime(true)} />
                        <Button
                            style={{ fontWeight: "bold", color: showStartTime ? "#ccc" : "#00a8ee"}}
                            type="text"
                            title="SLUT"
                            text="SLUT"
                            onClick={() => setShowStartTime(false)} />
                    </Section>
                    <Section direction="row" justify="center" style={{ width: "100%" }}>
                        <p style={{ color: "#999" }}>{startTime.hours}: {startTime.minutes} - {endTime.hours}:{endTime.minutes}</p>
                    </Section>
                    {showStartTime ?
                        <Section direction="column" style={{ width: "100%" }}>
                            <TimePicker
                                valueGroups={startTime}
                                optionGroups={{
                                    hours: defaultHours,
                                    minutes: defaultMinutes,
                                }}
                                onChange={onChangeStartTime}></TimePicker>
                        </Section> : <Section direction="column" style={{ width: "100%" }}>
                            <TimePicker
                                valueGroups={endTime}
                                optionGroups={{
                                    hours: defaultHours,
                                    minutes: defaultMinutes,
                                }}
                                onChange={onChangeEndTime}></TimePicker>
                        </Section>
                    }
                    <Section direction="row" justify="space-around" style={{ width: "100%" }}>
                        <Button
                            type="text"
                            style={{ fontWeight: "bold" }}
                            title="Avbryt"
                            text="Avbryt"
                            onClick={hideSchedule} />
                        <Button
                            type="text"
                            style={{ fontWeight: "bold" }}
                            title="Klart"
                            text="Klart"
                            onClick={confirmSchedule} />
                    </Section>
                </Section>
            </Modal >);
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
                    {defaultWeekdays.map((day, index) => (
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
                    <Button
                        type="text"
                        text={`${startTime.hours}: ${startTime.minutes} - ${endTime.hours}:${endTime.minutes} nästa dag`}
                        onClick={showSchedule} />
                </Section>
            </Section>
            {renderSchedule()}
        </StyledScheduler>
    );
}

export default Scheduler;