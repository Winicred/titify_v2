import {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../";

export const useAuth = () => {
    const [isAuth, setAuth] = useState(false);

    const {authStore} = useContext(AuthContext);

    useEffect(() => {
        setAuth(authStore.isAuth);
    }, [authStore]);

    return isAuth;
}