import $api from '../http';
import {AxiosResponse} from "axios";

export class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse> {
        return $api.post('/auth/login', {username, password});
    }

    static async register(username: string, email: string, password: string, passwordConfirm: string): Promise<AxiosResponse> {
        return $api.post('/auth/register', {username, email, password, passwordConfirm});
    }

    static async logout(): Promise<AxiosResponse> {
        return $api.post('/auth/logout');
    }
}

