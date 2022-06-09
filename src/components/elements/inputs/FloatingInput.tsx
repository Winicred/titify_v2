import React, {FC} from 'react';
import {InputProps} from "../../../models/components/Input";

const FloatingInput: FC<InputProps> = (props) => {

    const type = props.type || 'text';
    const id = props.id || 'input-floating-' + Math.random().toString(36);

    return (
        <div className="px-5 pb-3 pt-5 rounded-xl bg-neutral-900/30">
            <div className={`relative z-0 w-full`}>
                <input type={type} name={props.name}
                       className="block transition duration-300 py-1.5 px-2 w-full text-sm text-neutral-100 bg-transparent border-0 border-b-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-primary-100 peer"
                       placeholder=" " id={id} required={props.required} ref={props.innerRef} onChange={props.onChange}/>
                <label htmlFor={id}
                       className="absolute text-sm text-neutral-400 duration-300 transform translate-x-0 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-placeholder-shown:translate-x-2 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:translate-x-0">{props.placeholder}</label>
            </div>
        </div>
    );
};

export default FloatingInput;