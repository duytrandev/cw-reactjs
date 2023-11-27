import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "models";
import { RootState } from "reduxs/store";
export interface AuthState {
  isLoggedIn: boolean,
  logging?: boolean,
  currenUser?: IUser,
  errors?: object
}
export interface LogginPayload {
  username: string,
  password: string
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currenUser: undefined,
  errors: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<LogginPayload>) => {
      console.log(action)
      state.logging = true;
    },
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      state.isLoggedIn = true
      state.logging = false
      state.currenUser = action.payload
    },
    loginFailure: (state, action: PayloadAction<object>) => {
      state.logging = false
      state.errors = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.currenUser = undefined
    }
  }
})

export const authActions = authSlice.actions

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const selectIsLogging = (state: RootState) => state.auth.logging
export const selectErrorsObject = (state: RootState)=> state.auth.errors
export const selectCurrentUser = (state: RootState)=> state.auth.currenUser

const authReducer = authSlice.reducer
export default authReducer