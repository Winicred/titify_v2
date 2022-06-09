import React, {FC, useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../";
import {ChevronDownIcon} from "@heroicons/react/solid";
import Dropdown from "../elements/dropdown/Dropdown";
import EllipsedText from "../elements/text/EllipsedText";
import {observer} from "mobx-react-lite";
import Breadcrumb from "./Breadcrumb";

const Navbar: FC = () => {

    const {authStore} = useContext(AuthContext);

    return (
        <div className="titify-navbar h-[65px] w-full bg-neutral-900">
            <div className="py-2 px-10 h-full flex items-center">
                <div>
                    <Breadcrumb/>
                </div>
                <div className="ml-auto">
                {authStore.isAuth ? (

                            <Dropdown>
                                <Dropdown.Header>
                                    <div
                                        className="p-1 flex items-center gap-2 hover:bg-neutral-400/30 rounded h-full cursor-pointer min-w-[150px] max-w-[200px]">
                                        <div className="w-1/3 flex justify-center items-center">
                                            <img alt="Avatar template"
                                                src="https://avatars3.githubusercontent.com/u/52709818?s=460&u=f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&v=4"
                                                width={36} height={36}/>
                                        </div>

                                        <div className="flex flex-col items-start w-1/2">
                                            <EllipsedText className="text-lg leading-tight"
                                                          title="testttttttttttttttttttttttttttttt">
                                                {authStore!.user.username}
                                            </EllipsedText>
                                            <EllipsedText className="text-sm text-neutral-400 leading-tight text-ellipsis">
                                                {authStore!.user.email}
                                            </EllipsedText>
                                        </div>

                                        <div className="flex p-2 items-center justify-center">
                                            <ChevronDownIcon className="w-6 h-6"/>
                                        </div>
                                    </div>
                                </Dropdown.Header>

                                <Dropdown.Items>
                                    <Dropdown.Item text="test" href="/suggest"/>

                                    <Dropdown.Separator/>

                                    <Dropdown.Item text="Logout" onClick={authStore.logout}/>
                                </Dropdown.Items>
                            </Dropdown>
                    )
                    :
                    (
                        <>
                            <Link to="register"
                                  className="text-neutral-500 px-5 py-2 rounded transition text-neutral-500/90 font-medium hover:bg-primary-100/70 hover:text-neutral-100/80 active:bg-primary-100 active:shadow-[0_0_6px_1px_rgb(61,81,250)] select-none">
                                Register
                            </Link>

                            <Link to="login"
                                  className="px-5 py-2 ml-4 rounded transition bg-primary-100 text-neutral-100 shadow-[0_0_10px_2px_rgb(61,81,250)]">
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default observer(Navbar);