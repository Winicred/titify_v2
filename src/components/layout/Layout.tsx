import {Outlet} from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import TitifyPlayer from "../player/MusicPlayer";

const Layout = () => {
    return (
        <>
            <div className="main-container h-screen overflow-hidden">
                <Sidebar/>

                <Navbar/>

                <TitifyPlayer/>

                <div className="titify-main p-3">
                    <Outlet/>
                </div>

            </div>

        </>
    );
};

export default Layout;