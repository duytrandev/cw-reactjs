import { IUser, ListReponse } from "models"
import { axiosClient } from "./axiosClient"

export const userAPI = {
    async getAll(option: object): Promise<ListReponse<IUser>> {
        const url = '/admin-users/list'
        return axiosClient.post(url, {
            search: option
        }).then(rs => rs.data)
    }
}