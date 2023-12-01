import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "reduxs/store";

export interface SearchOptions {
  search: {
    username: string,
    email: string,
    facilities: string[],
    isModerator: boolean,
    level: string,
    name: string,
    roles: string[],
    status: string[]
  },
  page: number,
  sort: string[]
}

export interface UserState{
  searchOptions:  SearchOptions
}

const initialState: UserState = {
  searchOptions: {
    search:{
      username:'',
      email: '',
      facilities: [],
      isModerator: false,
      level: '',
      name: '',
      roles: [],
      status: ['ACTIVE', 'NEW_PASSWORD_REQUIRED']
    },
    page: 0,
    sort: []
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSearchOptions: (state, action) => {
      const key = Object.keys(action.payload)[0]
      if (key == 'search') {
        state.searchOptions.search = { ...state.searchOptions.search, ...action.payload.search };
      } else if (key in state.searchOptions) {
        state.searchOptions = { ...state.searchOptions, ...action.payload };
      }
    }
  }
})

export const userActions = userSlice.actions

export const searchOptionSelector = (state: RootState) => state.user.searchOptions

const userReducers = userSlice.reducer
export default userReducers