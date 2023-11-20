import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 1
}

export const couterSice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increament: (state)=>{
            state.value + 1
        }
    }
})