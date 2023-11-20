import { IUser, ListReponse } from "models"
import { axiosClient } from "./axiosClient"

export const userAPI = {
    async getAll(): Promise<ListReponse<IUser>> {
        const url = '/admin-users/list'
        return axiosClient.post(url, {
            search: {
            }
        }).then(rs => rs.data)
    }
}