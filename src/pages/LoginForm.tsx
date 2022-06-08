import {FC, FormEvent, useContext, useRef, useState} from "react";
import {AuthStoreProps} from "../";
import {AuthContext} from "../";
import CriticalError from "../components/elements/error/CriticalError";

const LoginForm:FC = () => {
    const {authStore} = useContext<AuthStoreProps>(AuthContext);

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState<string>("");

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError('');

        const username = usernameRef.current!.value;
        const password = passwordRef.current!.value;

        authStore.login(username, password).then( (r) => {
            console.log(r)
        }   ).catch( (e) => {
            setError(e.message);
        }   );
    }

    return (
        <div>
            {error && <CriticalError message={error}/>}

            <form onSubmit={handleLogin}>
                <input type="text" className="text-black" ref={usernameRef}/>

                <input type="password" className="text-black" ref={passwordRef}/>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
