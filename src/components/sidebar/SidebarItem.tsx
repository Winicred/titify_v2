import React, {createElement, FC, SVGProps} from 'react';
import {Link, NavLink} from "react-router-dom";

interface SidebarItemProps {
    path: string;
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    title: string;
}

const SidebarItem: FC<SidebarItemProps> = ({path, icon, title}) => {

    const Icon = () => {
        return createElement(icon, {className: 'w-6 h-6'});
    }

    return (
    <NavLink to={path} className={({isActive}) => ((isActive ? 'bg-primary-100 text-neutral-100 shadow-[0_0_10px_2px_rgb(61,81,250)] ' : ' transition hover:bg-primary-100/70 hover:text-neutral-100/90 active:bg-primary-100 active:text-neutral-100 rounded text-neutral-400/90') + ' select-none flex items-center gap-3 px-5 py-2 ease-out rounded') }>
        <Icon/>

        {title}
    </NavLink>
    );
};

export default SidebarItem;