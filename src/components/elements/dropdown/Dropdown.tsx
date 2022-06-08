// TODO:
// - Remove the crutches for the transition (line 48)

import {Menu, Transition} from '@headlessui/react';
import {DropdownProps} from "../../../models/components/Dropdown";
import {DropdownItemsProps} from "../../../models/components/DropdownItemsProps";
import {Link} from "react-router-dom";

const position = {
    bottom: {
        enter: 'transition ease-out duration-100 transform origin-bottom-center',
        enterFrom: 'translate-y-2 opacity-0',
        enterTo: 'translate-y-0 opacity-100',
        leave: 'transition ease-in duration-100 transform origin-bottom-center',
        leaveFrom: 'translate-y-0 opacity-100',
        leaveTo: 'translate-y-2 opacity-0',
    },
    top: {
        enter: 'transition ease-out duration-100 transform origin-top-center',
        enterFrom: '-translate-y-2 opacity-0',
        enterTo: 'translate-y-0 opacity-100',
        leave: 'transition ease-in duration-100 transform origin-top-center',
        leaveFrom: 'translate-y-0 opacity-100',
        leaveTo: '-translate-y-2 opacity-0',
    },
    left: {
        enter: 'transition ease-out duration-100 transform origin-left-center',
        enterFrom: '-translate-x-2 opacity-0',
        enterTo: 'translate-x-0 opacity-100',
        leave: 'transition ease-in duration-100 transform origin-left-center',
        leaveFrom: 'translate-x-0 opacity-100',
        leaveTo: '-translate-x-2 opacity-0',
    },
    right: {
        enter: 'transition ease-out duration-100 transform origin-right-center',
        enterFrom: 'translate-x-2 opacity-0',
        enterTo: 'translate-x-0 opacity-100',
        leave: 'transition ease-in duration-100 transform origin-right-center',
        leaveFrom: 'translate-x-0 opacity-100',
        leaveTo: 'translate-x-2 opacity-0',
    }
}

let customPosition: {}; // crutches for the transition

const Dropdown = ({children, from = 'top'}: DropdownProps) => {

    customPosition = position[from]

    return (
        <Menu as="div" className="relative inline-block text-left">
            {children}
        </Menu>
    );
}

Dropdown.Header = function Header({children}: DropdownProps) {
    return (
        <div>
            <Menu.Button>
                {children}
            </Menu.Button>
        </div>
    );
}

Dropdown.Items = function Items({children}: DropdownProps) {

    return (
        <Transition
            as={Menu.Items}
            {...customPosition}
        >
            <Menu.Items
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-neutral-700/70 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {children}
                </div>
            </Menu.Items>
        </Transition>
    );
}

Dropdown.Separator = function Separator() {
    return (
        <div className="border-t border-neutral-600 my-1"></div>
    );
}

Dropdown.Item = function Item({text, href, onClick}: DropdownItemsProps) {
    return href ?
        (
            <Link to={href} className="block px-4 py-2 text-sm leading-5 text-neutral-100 hover:bg-primary-100">
                {text}
            </Link>
        )
        :
        (
            <span role="menuitem"
                  className="block px-4 py-2 text-sm leading-5 text-neutral-100 hover:bg-primary-100 cursor-pointer"
                  onClick={onClick}>
                {text}
            </span>
        );
}


export default Dropdown;