import {IUser} from "../models/entity/IUser";
import {AuthService} from "../service/AuthService";
import {makeAutoObservable} from "mobx";

export default class AuthStore {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(username: string, password: string) {
        this.setLoading(true);

        const response = await AuthService.login(username, password);

        localStorage.setItem('token', response.data.accessToken);

        this.setAuth(true);
        this.setUser(response.data.user);
        this.setLoading(false);

        return response.data;
    }

    async register(credentials: { username: string, email: string, password: string, passwordConfirm: string }) {
        this.setLoading(true);

        const {username, email, password, passwordConfirm} = credentials;
        const response = await AuthService.register(username, email, password, passwordConfirm);

        if (response.data.success) {
            localStorage.setItem('token', response.data.accessToken);

            this.setAuth(true);
            this.setUser(response.data.user);
            this.setLoading(false);
        }

        return response.data;
    }

    async logout() {
        this.setLoading(true);

        const response = await AuthService.logout();

        localStorage.removeItem('token');

        this.setAuth(false);
        this.setUser({} as IUser);

        this.setLoading(false);

        return response!.data;
    }
}