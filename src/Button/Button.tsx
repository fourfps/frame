import React from 'react';
import "./Button.css"

type ButtonProps = {
    type: ("primary"|"secondary"),
    label: string,
    loading?: boolean,
    disabled?: (true|false)
}

export function Button(props: ButtonProps) {
    return(
        <>
            <button className={"frame-button-base focus-ring " + "frame-button-" + props.type 
            + (props.disabled ? " frame-button-disabled " : "")
            + (props.loading ? " frame-button-loading " : "")}>{props.label}</button>
        </>
    );
}