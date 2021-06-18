import React from "react";
import { FC } from "react";

const buttonStyle = {
    padding: '10px 20px'
};
export interface IButton {
    label?: string;
    onHandleCLick?: () => void; 
}

const Button: FC<IButton> = ({label, onHandleCLick}) => {
    return (
        <button 
            className="btn btn-default"
            style={buttonStyle}
            onClick={() => onHandleCLick}
        >
            {label}
        </button>
    )
}

export default Button;