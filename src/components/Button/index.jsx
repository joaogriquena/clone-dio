import React from "react";
import { ButtonContiner } from "./styles";

const Button = ({ tittle, variant = "primary", onClick }) => {
    return (
        <ButtonContiner variant={variant} onClick={onClick}>
            {tittle}
        </ButtonContiner>
    )
}

export { Button }