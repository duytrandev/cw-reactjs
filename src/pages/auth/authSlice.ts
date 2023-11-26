import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "models";
export interface AuthState {
  isLoggedIn: boolean,
  logging?: boolean,
  currenUser?: IUser,
}
export interface LogginPayload {
  username: string,
  password: string
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currenUser: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<LogginPayload>) => {
      state.logging = true;
    },
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      state.isLoggedIn = true
      state.logging = false
      state.currenUser = action.payload
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.logging = false
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.currenUser = undefined
    }
  }
})

export const authActions = authSlice.actions

export const selectIsLoggedIn = state => state.auth.isLoggedIn
export const selectIsLogging = state => state.auth.isLogging

const authReducer = authSlice.reducer
export default authReducer