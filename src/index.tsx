import React, {createContext} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import AuthStore from "./store/AuthStore";
import './main.css';

export interface AuthStoreProps {
    authStore: AuthStore
}

const authStore = new AuthStore();
export const AuthContext = createContext<AuthStoreProps>({
    authStore
});

const root = createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <AuthContext.Provider value={{authStore}}>
        <App/>
    </AuthContext.Provider>
);