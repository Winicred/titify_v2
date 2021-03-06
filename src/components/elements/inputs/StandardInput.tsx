import {FC, InputHTMLAttributes, Ref, useEffect, useRef, useState} from 'react';
import {classNames} from "../../../helpers/classes";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    innerRef?: Ref<HTMLInputElement>;
    error?: { msg: string; };
    label?: string;
}

const StandardInput: FC<InputProps> = (props) => {

    const [isFocused, setIsFocused] = useState(false);

    const id = props.id ||
        'input-standard-' + Math.random().toString(36);
    const ref = useRef<HTMLInputElement>(null);

    const handleClick = (e: MouseEvent) => {
        if (ref.current) {
            if (!ref.current.contains(e.target as Node)) {
                setIsFocused(false);
            } else {
                setIsFocused(true);
                ref.current.focus();
            }
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('mousedown', handleClick);
        }
    }, []);

    return (
        <div className={classNames(`px-3 py-2 rounded-xl cursor-pointer border-2 transition duration-300 ${isFocused ? 'bg-neutral-500/40 border-2 border-primary-100/80 cursor-default' : 'bg-neutral-600/30 border-transparent cursor-pointer'} ${props.error ? 'border-red-500' : ''} ${props.className || ''}`)}
            ref={ref}>
                <label
                    className={classNames(`block cursor-pointer text-xs font-medium select-none transition ml-2 duration-300 ${isFocused ? 'text-primary-100/90 cursor-default' : 'text-neutral-400 cursor-pointer'}`)}
                    htmlFor={id}>
                    {props.label}
                </label>

                <input type={props.type}
                       className={classNames(`py-1 px-2 transition duration-300 block w-full text-sm text-neutral-100 bg-transparent appearance-none outline-none ${isFocused ? 'ring-0 border-primary-100 cursor-text' : 'cursor-pointer'}`)}
                       id={id}
                       {...props}
                />

                {props.error &&
                    <div className="text-red-500 text-xs font-medium select-none">
                        {props.error.msg}
                    </div>
                }
        </div>
    );
};

export default StandardInput;