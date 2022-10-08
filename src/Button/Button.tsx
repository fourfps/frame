import React from 'react';
import "./Button.css"

type ButtonProps = {
    type: ("primary"|"secondary"),
    label: string,
    loading?: boolean,
    disabled?: (true|false),
    width?: string,
    socialLogin?: boolean,
    onClick?: () => void
}

export function Button(props: ButtonProps) {
    return(
        <>
            <button onClick={props.onClick} className={"frame-button-base focus-ring " + "frame-button-" + props.type 
            + (props.disabled ? " frame-button-disabled " : "")
            + (props.loading ? " frame-button-loading " : "")
            + (props.socialLogin ? " frame-button-social-login " : "")}
            
            style={{
                width: (props.width ? props.width : "auto")
            }}
            
            >{props.label}</button>
        </>
    );
}