import { configureStore } from "@reduxjs/toolkit";
import kbReducer from './KeyboardSlice'


const store = configureStore({reducer:{
    kbState:kbReducer
}})

export default store