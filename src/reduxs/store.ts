import { configureStore } from "@reduxjs/toolkit";
import { couterSice } from "./auth/authSlice";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga";
import authReducer from "../pages/auth/authSlice";
import { useDispatch } from "react-redux";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        couter: couterSice.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
    devTools: true
})

sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>