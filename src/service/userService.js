import {axiosService} from "./axiosService";
import {urls} from "../constant/urls";


const userService = {
    getAll: () => axiosService(urls.users.base),
    getById: (id)=>axiosService(urls.users.byId(id))
}

export {
    userService
}