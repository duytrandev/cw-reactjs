import { IUser, ListReponse, IFacility } from "models"
import { axiosClient } from "./axiosClient"

export const userAPI = {
    async getAll(option: object): Promise<ListReponse<IUser>> {
        const url = '/admin-users/list'
        return axiosClient.post(url, option).then(rs => rs.data)
    },
    async getFacilities(option: object): Promise<IFacility[]>{
        const url = '/admin-facility/facility/list'
        return axiosClient.get(url, {
            params: option
        }).then(rs => rs.data.list)
    }
}