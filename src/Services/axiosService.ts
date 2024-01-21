import {baseURL} from "../Const/urls";
import axios from "axios";

 export const axiosService = axios.create({baseURL})