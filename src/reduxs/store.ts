import { configureStore } from "@reduxjs/toolkit";
import { couterSice } from "./auth/authSlice";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga";
import authReducer from "../pages/auth/authSlice";
import userReducers from "../pages/User/userSlice";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        couter: couterSice.reducer,
        auth: authReducer,
        user: userReducers
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
    devTools: true
})

sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>