import {ErrorProps} from "../../../models/errors/Error";

const Warning = ({message}: ErrorProps) => {
    return (
        <div
            className="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
            role="alert">
            <span className="font-medium">Warning alert!</span> {message}
        </div>
    );
};

export default Warning;