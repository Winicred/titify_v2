import {AxiosResponse} from "axios";

interface ValidatorProps extends AxiosResponse {
    errors?: {
        [key: string]: {
            msg: string;
            param: string;
        }
    }
}

export const validateResponseErrors = (response: ValidatorProps) => {
    const {errors} = response;
    const inputErrors: {[key: string]: {msg: string}} = {};

    if (errors) {
        for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
                const error = errors[key];
                inputErrors[error.param] = {msg: error.msg}
            }
        }
    }

    return inputErrors;
}