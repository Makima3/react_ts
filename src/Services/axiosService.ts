import {baseURL} from "../Const/urls";
import axios, {AxiosResponse} from "axios";

 export const axiosService = axios.create({baseURL})

export type IRes<T> = Promise<AxiosResponse<T>>