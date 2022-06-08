import $api from '../http';
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";

export class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {username, password});
    }

    static async registration(username: string, email: string, password: string, passwordRepeat: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/registration', {username, email, password, passwordRepeat});
    }

    static async logout(): Promise<void> {
        return $api.post('/auth/logout');
    }
}

