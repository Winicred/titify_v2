import {ReactNode} from "react";

export interface DropdownProps {
    from?: "top" | "bottom" | "left" | "right";
    children?: ReactNode;
}