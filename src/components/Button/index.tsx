import React from "react";
import { ButtonContiner } from "./styles";
import { IButton } from './types'

const Button = ({ title, variant = "primary", onClick }: IButton) => {
    return (
        <ButtonContiner variant={variant} onClick={onClick}>{title}</ButtonContiner>
    )
}

export { Button }