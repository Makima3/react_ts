import axios, {AxiosResponse} from "axios";
import {baseURL} from "../const/urls";

 export const axiosService = axios.create({baseURL})

export type IRes<T> = Promise<AxiosResponse<T>>