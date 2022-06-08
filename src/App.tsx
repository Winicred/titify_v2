import {FC, useEffect, useState} from 'react';
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

const App: FC = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.classList.add('text-neutral-100', 'bg-neutral-900/95');

        document.addEventListener('DOMContentLoaded', () => {
            setIsLoading(false);
        }, {once: true});
    }, [])

    return (
        {isLoading} &&
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/suggest" element={<Suggest/>}/>
                    <Route path="/chart" element={<TopChart/>}/>
                    <Route path="/new" element={<NewStuff/>}/>
                    <Route path="/favorite" element={<Favorite/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/playlists" element={<Playlists/>}/>
                    <Route path="/help" element={<Help/>}/>
                    <Route path="/terms" element={<Terms/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                </Route>

                <Route path="/login" element={<LoginForm/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App


