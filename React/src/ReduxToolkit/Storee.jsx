import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'

const storee = configureStore({
    reducer:{
        counter: counterReducer
    }
})

export default storee;