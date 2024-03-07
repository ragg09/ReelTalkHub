import React from "react";

export interface ButtonProps {
    text: string;
    textColor: "blue" | "red" | "green" | "white";
    buttonColor: "blue" | "red" | "green";
    onClick?: () => void;
    buttonStyle?: "filled" | "border";
    type?: "button" | "submit";
    disabled?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
    text,
    textColor,
    buttonColor,
    onClick,
    buttonStyle,
    type,
    disabled,
}: ButtonProps) => {
    const buttonClassName =
        buttonStyle === "filled"
            ? `bg-${buttonColor}-500 text-${textColor} px-4 py-2 rounded`
            : `border border-${buttonColor}-500 text-${textColor}-500 px-4 py-2 rounded`;

    return (
        <div>
            <button
                className={buttonClassName}
                onClick={onClick}
                type={type}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    );
};

Button.defaultProps = {
    buttonColor: "blue",
    textColor: "white",
    onClick: () => {},
    type: "button",
    buttonStyle: "filled",
    disabled: false,
};

export default Button;
