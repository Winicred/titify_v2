import React, {FormEvent, useContext, useRef, useState} from 'react';
import CriticalError from "../components/elements/error/CriticalError";
import {Link, useNavigate} from "react-router-dom";
import {ArrowRightIcon} from "@heroicons/react/solid";
import StandardInput from "../components/elements/inputs/StandardInput";
import {AuthContext} from "../index";
import {validateResponseErrors} from "../helpers";

const RegisterForm = () => {

    const {authStore} = useContext(AuthContext);

    const [error, setError] = useState<string>("");
    const [inputErrors, setInputErrors] = useState<{ [key: string]: { msg: string; }; }>({});

    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const credentials = {
            username: usernameRef.current!.value,
            email: emailRef.current!.value,
            password: passwordRef.current!.value,
            passwordConfirm: passwordConfirmRef.current!.value
        }

        await authStore.register(credentials).then((response) => {
            if (!response.success) {
                passwordRef.current!.value = '';
                passwordConfirmRef.current!.value = '';

                setError(response.message);

                const badInputs = validateResponseErrors(response);
                setInputErrors(badInputs);
            } else {
                return navigate('/');
            }
        });
    }

    return (
        <div className="flex w-screen h-screen relative">
            <div onClick={() => navigate('/')}
                className="absolute top-10 left-32 py-4 px-8 flex gap-3 items-center bg-neutral-900/30 select-none rounded-full cursor-pointer transition duration-300 hover:bg-neutral-700/70 active:bg-neutral-600/90">
                <img
                    src="https://avatars3.githubusercontent.com/u/52709818?s=460&u=f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&v=4"
                    width="36"
                    height="36"
                    className="rounded-full"
                    alt="Titify"
                />

                <span className="text-2xl font-semibold">Titify</span>
            </div>

            <div className="w-1/3 flex justify-center items-center mx-auto">
                <div className="flex flex-col relative">
                    {error &&
                        <div className="mb-5 absolute -top-1/4 translate-y-16 w-full">
                            <CriticalError message={error} onClose={() => setError('')}/>
                        </div>}

                    <span className="text-lg font-semibold text-neutral-400">START FOR FREE</span>
                    <span className="mt-3 text-5xl font-bold text-neutral-100">Create your account</span>
                    <div className="mt-7 flex gap-1 items-center text-neutral-400">
                        <span>
                            Already a memeber?
                        </span>

                        <Link to="/login"
                              className="group text-primary-100 transition-colors duration-300 hover:text-neutral-100 hover:fill-neutral-100 flex items-center px-2 py-1 hover:bg-neutral-900 rounded ">
                            <span>Sign in</span>

                            <ArrowRightIcon
                                className="ml-1 opacity-0 fill-primary-100 transition duration-300 -translate-x-2 group-hover:opacity-100 group-hover:fill-neutral-100 group-hover:translate-x-0"
                                width={16} height={16}/>
                        </Link>
                    </div>

                    <form onSubmit={handleRegister} className="mt-10" autoComplete="on">
                        <div className="flex items-center justify-between gap-10">
                            <StandardInput placeholder="Username" className="w-1/2" innerRef={usernameRef}
                                           name="username" error={inputErrors.username}/>
                            <StandardInput placeholder="Email" className="w-1/2" innerRef={emailRef} name="email" error={inputErrors.email}/>
                        </div>

                        <div className="mt-6 flex flex-col gap-6">
                            <StandardInput type="password" placeholder="Password" innerRef={passwordRef} error={inputErrors.password}/>
                            <StandardInput type="password" placeholder="Password Confirm" error={inputErrors.passwordConfirm}
                                           innerRef={passwordConfirmRef}/>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button type="submit"
                                    className={`px-5 py-3 text-neutral-100 rounded-xl transform duration-300 shadow-[0_0_10px_2px_rgb(61,81,250)] disabled:cursor-not-allowed bg-primary-100 hover:brightness-150 active:brightness-110 select-none`}>Create Account</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;