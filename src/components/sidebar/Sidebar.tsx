// TODO Add some features:
// - Add a button to toggle the light/dark mode
// - Add a slider to change the width of the sidebar (add a min/max width)

import React, {useContext} from 'react';
import SidebarItem from "./SidebarItem";
import {
    BookmarkIcon,
    BookOpenIcon,
    FireIcon,
    HeartIcon,
    HomeIcon,
    MusicNoteIcon,
    SpeakerphoneIcon
} from "@heroicons/react/solid";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {AuthContext} from "../../";

const Sidebar = () => {

    const {authStore} = useContext(AuthContext);

    return (
        <div className="titify-sidebar bg-neutral-900 w-[300px] border-r border-r-neutral-600/40">
            <div className="p-5 h-full flex flex-col">
                <div className="flex flex-col gap-2">
                    <span className="font-semibold text-neutral-500 select-none">Public</span>

                    <div className="flex flex-col gap-3 mt-1">

                        {/* main public buttons */}
                        <SidebarItem title="Explore" path="/" icon={HomeIcon}/>
                        <SidebarItem title="Suggest" path="/suggest" icon={SpeakerphoneIcon}/>
                        <SidebarItem title="Top Chart" path="/chart" icon={FireIcon}/>
                        <SidebarItem title="New Stuff" path="/new" icon={MusicNoteIcon}/>
                        {/* end */}
                    </div>
                </div>

                {/* if user logged in, then show the sub menu */}
                {authStore.isAuth && (
                    <div className="flex flex-col gap-2 mt-10">
                        <span className="font-semibold text-neutral-500 select-none">Personal</span>

                        <div className="flex flex-col gap-3 mt-1">

                            {/* list of user's buttons */}
                            <SidebarItem title="Favorite" path="/favorite" icon={HeartIcon}/>
                            <SidebarItem title="History" path="/history" icon={BookOpenIcon}/>
                            <SidebarItem title="Playlists" path="/playlists" icon={BookmarkIcon}/>
                            {/* end */}
                        </div>
                    </div>
                )}
                {/* end */}

                <div className="mt-auto flex flex-col justify-center items-center">

                    {/* allow to show "Create a playlist" when user is logged in */}
                    {authStore.isAuth && (
                        <Link to="/playlists/create"
                              className="py-1 px-2 flex items-center select-none gap-1 text-neutral-500/90 font-medium transition-colors duration-150 rounded hover:bg-neutral-700/20 hover:text-neutral-100">
                            <BookmarkIcon className="w-4 h-4"/>
                            Create a playlist
                        </Link>
                    )}
                    {/* end */}

                    {/* "footer" */}
                    <div
                        className="mt-4 flex flex-col justify-center items-center text-sm text-neutral-600 select-none">
                        <span>© 2022 Titify</span>

                        <div className="mt-1 flex justify-center items-center flex-wrap">
                            <Link to="/help"
                                  className="text-neutral-500 select-none decoration-neutral-400 hover:underline">Help
                            </Link>

                            <span className="mx-2">|</span>
                            <Link to="/terms"
                                  className="text-neutral-500 select-none decoration-neutral-400 hover:underline">Terms
                            </Link>

                            <span className="mx-2">|</span>
                            <Link to="/privacy"
                                  className="text-neutral-500 select-none decoration-neutral-400 hover:underline">Privacy
                            </Link>
                        </div>
                    </div>
                    {/* end */}

                </div>
            </div>
        </div>
    );
};

export default observer(Sidebar);