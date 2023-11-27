import { axiosClient } from "./axiosClient"
import { IAuth } from "models"
import { LogginPayload } from "pages/auth/authSlice"

export const authApi = {
  async login({username, password}: LogginPayload): Promise<IAuth>{
    try {
      const uri = '/auth/login'
      const data = await axiosClient.post(uri, {
        username, password
      })
      return data.data
    } catch (error) {
      console.log('error auth.api.ts', error)
      throw error
    }
  }
}