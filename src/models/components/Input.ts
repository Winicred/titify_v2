import {ChangeEvent, KeyboardEvent, MouseEvent} from "react";

export interface InputProps {
    type?: string;
    id?: string;
    name?: string;
    value?: string;
    innerRef?: any;
    required?: boolean;
    placeholder?: string;
    className?: string;
    autoComplete?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
}