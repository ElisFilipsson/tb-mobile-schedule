import React from "react";

/* 
    * text: string
    * title: string (optional)
    * size: string (xs, sm, m, l, xl)
    * weight: string (light, normal, bold, bolder)
    */

function Headline(props) {

    const getSizeProp = () => {
        const { size } = props;
        if (
            typeof size !== "string" || (
                size !== "xs" &&
                size !== "sm" &&
                size !== "m" &&
                size !== "l" &&
                size !== "xl"
            )) {
            throw new Error("Prop Size for Headline needs to be a text value of xs, sm, m, l, xl");
        }
        return size;
    };

    const getWeightProp = () => {
        const { weight } = props;
        if (
            weight &&
            (typeof weight !== "string" || (
                weight !== "lighter" &&
                weight !== "normal" &&
                weight !== "bold" &&
                weight !== "bolder"
            ))) {
            throw new Error("Prop Weight for Headline needs to be a text value of lighter, normal, bold, bolder");
        }
        return weight;
    };

    const renderHeadline = () => {

        const style = {
            fontWeight: getWeightProp(),
            ...props.style
        };

        switch (getSizeProp()) {
            case "xs":
                return <h5 title={props.title} style={style} >{props.text}</h5>;
            case "sm":
                return <h4 title={props.title} style={style} >{props.text}</h4>;
            case "m":
                return <h3 title={props.title} style={style} >{props.text}</h3>;
            case "l":
                return <h2 title={props.title} style={style} >{props.text}</h2>;
            case "xl":
            default:
                return <h1 title={props.title} style={style} >{props.text}</h1>;
        };
    };

    return (
        <>
            {renderHeadline()}
        </>
    );
}

export default Headline;
