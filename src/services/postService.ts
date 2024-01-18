import {axiosService, IRes} from "./axiosService";
import {urls} from "../const/urls";
import {IPost} from "../Interfaces/PostInterface";

 export  const postService = {
    getAll: (): IRes<IPost[]> => axiosService.get(urls.posts.base),
    getById: (id:number): IRes<IPost> => axiosService.get(urls.posts.postById(id))
}