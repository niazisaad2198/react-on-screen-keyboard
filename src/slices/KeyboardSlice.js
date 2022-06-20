import { createSlice } from "@reduxjs/toolkit";

const text = {
    text:"",
    isCapslockOn:false,
}
const keyboardSlice = createSlice({
    name:'kbSlice',
    initialState:text,
    reducers:{
        updateText:(state, action)=>{
            state.text += action.payload
        },
        toggleCapsLock:(state)=>{
            state.isCapslockOn = !state.isCapslockOn
        },
    }
})

export const {updateText, toggleCapsLock} = keyboardSlice.actions
export default keyboardSlice.reducer