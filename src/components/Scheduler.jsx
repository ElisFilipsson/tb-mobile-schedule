import React, { useState } from "react";
import styled from "styled-components";
import { Section } from "../layouts";
import { Button, Headline, Modal, TimePicker } from ".";
import { defaultWeekdays, defaultHours, defaultMinutes } from "../shared/variabels";
import translation from "../locales/translation.json";
import { withNamespaces } from 'react-i18next';

const StyledScheduler = styled.div`
    margin-bottom: 1rem;
`;
/* 
    * onSelectionChanged: (weekdays, interval) => void
    */

function Scheduler(props) {
    const { t } = props;

    const [isScheduleVisible, setIsScheduleVisible] = useState(false);
    const [showStartTime, setShowStartTime] = useState(true);

    const [weekdays, setWeekdays] = useState([]);

    const [startTime, setStartTime] = useState({
        hours: "23",
        minutes: "00",
    });

    const [endTime, setEndTime] = useState({
        hours: "07",
        minutes: "00"
    });

    const [doNotDisturb, setDoNotDisturb] = useState({
        startTime: {
            hours: "23",
            minutes: "00"
        },
        endTime: {
            hours: "07",
            minutes: "00"
        }
    });

    const isDaySelected = (day) => {
        return weekdays.length && weekdays.filter(weekday => weekday?.position === day?.position).length;
    };

    const onSelectedDayDidChange = (day) => {
        let oldWeekdays = [...weekdays];
        if (isDaySelected(day)) {
            oldWeekdays = oldWeekdays.filter(oldDay => oldDay.position !== day.position);
            setWeekdays(oldWeekdays);
            props.onSelectionChanged(oldWeekdays, doNotDisturb);
        } else {
            oldWeekdays.push(day);
            setWeekdays(oldWeekdays);
            props.onSelectionChanged(oldWeekdays, doNotDisturb);
        }
    };

    const showSchedule = () => {
        setIsScheduleVisible(true);
    };

    const hideSchedule = () => {
        setIsScheduleVisible(false);
    };

    const onChangeStartTime = (name, value) => {
        const start = { ...startTime };
        start[name] = value;
        setStartTime(start);
    };

    const onChangeEndTime = (name, value) => {
        const end = { ...endTime };
        end[name] = value;
        setEndTime(end);
    };

    const isNextDay = (startTime, endTime) => {
        const startHours = parseInt(startTime.hours);
        const startMin = parseInt(startTime.minutes);
        const endHours = parseInt(endTime.hours);
        const endMin = parseInt(endTime.minutes);
        if (startHours < endHours) {
            return "";
        }
        if (startHours > endHours) {
            return t(translation.shared.next_day);
        }
        if (startHours === endHours) {
            if (startMin > endMin) {
                return t(translation.shared.next_day);
            }
        }
        return "";
    };

    const confirmSchedule = () => {
        const interval = { ...doNotDisturb };
        interval.startTime = { ...startTime };
        interval.endTime = { ...endTime };
        setDoNotDisturb(interval)
        props.onSelectionChanged(weekdays, doNotDisturb);
        setIsScheduleVisible(false);
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
                            title={t(translation.shared.start)}
                            text={t(translation.shared.start)}
                            weight="bold"
                            onClick={() => setShowStartTime(true)} />
                        <Button
                            style={{ fontWeight: "bold", color: showStartTime ? "#ccc" : "#00a8ee" }}
                            type="text"
                            title={t(translation.shared.end)}
                            text={t(translation.shared.end)}
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
                            title={t(translation.shared.cancel)}
                            text={t(translation.shared.cancel)}
                            onClick={hideSchedule} />
                        <Button
                            type="text"
                            style={{ fontWeight: "bold" }}
                            title={t(translation.shared.finished)}
                            text={t(translation.shared.finished)}
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
                    {defaultWeekdays.map((day, index) =>
                        (<Button
                            key={index}
                            smaller={true}
                            type={isDaySelected(day) ? "primary" : "light"}
                            text={t(translation.shared[day.shortName])}
                            title={t(translation.shared[day.shortName])}
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
                        title={t(translation.shared.set_schedule)}
                        text={t(translation.shared.set_schedule)} />
                    <Button
                        type="text"
                        text={`${doNotDisturb.startTime.hours}: ${doNotDisturb.startTime.minutes} - ${doNotDisturb.endTime.hours}:${doNotDisturb.endTime.minutes} ${isNextDay(doNotDisturb.startTime, doNotDisturb.endTime)}`}
                        onClick={showSchedule} />
                </Section>
            </Section>
            {renderSchedule()}
        </StyledScheduler>
    );
}

export default withNamespaces()(Scheduler);