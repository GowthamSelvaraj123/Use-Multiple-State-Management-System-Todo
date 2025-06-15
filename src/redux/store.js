import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/slice/todoSlice"
export const store = configureStore({
    reducer:{
        todos:todoReducer
    },
})