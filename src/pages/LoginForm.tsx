import {FC, FormEvent, useContext, useRef, useState} from "react";
import {AuthContext, AuthStoreProps} from "../";
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

        authStore.login(username, password).then((r) => {
            console.log(r)
        }).catch((e) => {
            setError(e.message);
        });
    }

    return (
        <div className="flex w-screen h-screen relative">
            <div className="absolute top-10 left-32 py-4 px-8 flex gap-3 items-center bg-neutral-900/30 select-none rounded-full">
                <img
                    src="https://avatars3.githubusercontent.com/u/52709818?s=460&u=f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&v=4"
                    width={36}
                    height={36}
                    className="rounded-full"
                    alt={'Titify'}
                />

                <span className="text-2xl font-semibold">Titify</span>
            </div>

            <form onSubmit={handleLogin} className="w-1/3 flex justify-center items-center mx-auto">
                {error && <CriticalError message={error} onClose={() => setError('')}/>}

                <div>
                    <span className="text-3xl font-semibold">Sign in</span>
                    <span className="text-sm text-neutral-400">to continue</span>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
