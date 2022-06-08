import {IUser} from "../models/entity/IUser";
import {AuthService} from "../service/AuthService";
import {makeAutoObservable} from "mobx";

export default class AuthStore {
    user = {} as IUser;
    isAuth = true;
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

        try {
            const response = await AuthService.login(username, password);

            localStorage.setItem('token', response.data.accessToken);

            this.setAuth(true);

            this.setUser(response.data.user);

        } catch (e) {
            console.error(e);
        } finally {
            this.setLoading(false);
        }
    }

    async logout() {
        this.setLoading(true);

        try {
            await AuthService.logout();

            localStorage.removeItem('token');

            this.setAuth(false);
            this.setUser({} as IUser);

        } catch (e) {
            console.error(e);
        } finally {
            this.setLoading(false);
        }
    }
}