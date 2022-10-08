import React from "react";
import "./Input.css"

type InputProps = {
    label?: string,
    placeholder: string,
    prefillValue?: string,
    type: ("email"|"text"),
    width: string,
    ref?: any,
}

export default function Input(props: InputProps) {
    return(
        <>
            {props.label && 
                <label className="frame-input-label">{props.label}</label>
            }
            <input ref={props.ref} className="frame-input focus-ring" style={{width: props.width}} type={props.type} placeholder={props.placeholder} defaultValue={props.prefillValue} />
        </>
    );
}