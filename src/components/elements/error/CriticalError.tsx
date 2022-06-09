import {XIcon} from "@heroicons/react/solid";
import {useState} from "react";

interface ErrorProps {
    message: string;
    onClose?: () => void;
}

const CriticalError = ({message, onClose}: ErrorProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleShow = () => {
        // setInterval(() => {
            setIsOpen(false);
        // }, 500)
    }

    if (isOpen) {
        return (
            <div
                className="p-4 mb-4 relative text-sm text-red-700 bg-red-100 rounded-lg shadow-lg alert-box hide"
                role="alert">
                <div className="mr-2">
                    <span className="font-medium">Error!</span>
                    <span className="ml-1">{message}</span>
                </div>

                <button className="absolute top-2 right-2" onClick={onClose}>
                    <XIcon className="w-4 h-4" onClick={toggleShow}/>
                </button>
            </div>
        )
    } else {
        return null
    }
}

export default CriticalError;