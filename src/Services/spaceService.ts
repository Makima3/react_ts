import {ILaunch} from "../IInterfaces/LaunchInterf";
import {axiosService, IRes} from "./axiosService";
import {urls} from "../Const/urls";

export const spaceService ={
    getAll:(): IRes<ILaunch[]> => axiosService.get(urls.launches.base)
}