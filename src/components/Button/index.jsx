import React from "react";
import { ButtonContiner } from "./styles";

const Button = ({ title, variant = "primary", onClick }) => {
    return (
        <ButtonContiner variant={variant} onClick={onClick}>{title}</ButtonContiner>
    )
}

export { Button }