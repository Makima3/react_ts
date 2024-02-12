import {IUser} from "../interfaces/userInterface";
import {IRes} from "../types/IResTypes";
import {axiosService} from "./axiosService";
import {urls} from "../Const/urls";

export const userService = {
    getAll: (): IRes<IUser[]> => axiosService.get(urls.users),
    create: (data: IUser): IRes<IUser> => axiosService.post(urls.users, data)
}