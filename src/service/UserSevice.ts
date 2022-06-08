import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/entity/IUser";

export default class UserService {
    static fetchUser(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('/users');
    }
}