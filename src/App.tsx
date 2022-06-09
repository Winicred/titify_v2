import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Layout from "./components/layout/Layout";
import NoPage from "./pages/NoPage";
import Suggest from "./pages/Suggest";
import TopChart from "./pages/TopChart";
import NewStuff from "./pages/NewStuff";
import Favorite from "./pages/Favorite";
import History from "./pages/History";
import Playlists from "./pages/Playlists";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CreatePlaylist from "./pages/CreatePlaylist";
import RegisterForm from "./pages/RegisterForm";
import {FC, useEffect, useState} from "react";

const App: FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.classList.add('text-neutral-100', 'bg-neutral-900/95');

        document.addEventListener('DOMContentLoaded', () => {
            setIsLoading(false);
        });

        return () => {
            document.body.classList.remove('text-neutral-100', 'bg-neutral-900/95');

            document.removeEventListener('DOMContentLoaded', () => {
                setIsLoading(false);
            });
        };
    }, []);

    return (
        {isLoading} &&
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/suggest" element={<Suggest/>}/>
                    <Route path="/chart" element={<TopChart/>}/>
                    <Route path="/new" element={<NewStuff/>}/>
                    <Route path="/favorite/:id" element={<Favorite/>}/>
                    <Route path="/history/:id" element={<History/>}/>
                    <Route path="/playlists/:id" element={<Playlists/>}/>
                    <Route path="/playlists/create" element={<CreatePlaylist/>}/>
                    <Route path="/help" element={<Help/>}/>
                    <Route path="/terms" element={<Terms/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                </Route>

                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/register" element={<RegisterForm/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
