import axios from "axios";
import {baseURL} from "../Const/urls";

 export const axiosService = axios.create({baseURL})