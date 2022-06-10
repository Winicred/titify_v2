import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface SocialPagesButtonProps extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label?: string;
}