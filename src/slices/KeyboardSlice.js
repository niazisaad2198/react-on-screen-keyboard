import { createSlice } from "@reduxjs/toolkit";

const kbState = {
    text:"",
    isCapsLockOn:false
}
const keyboardSlice = createSlice({
    name:'kbSlice',
    initialState:kbState,
    reducers:{
        updateText:(state, action)=>{
            state.text += action.payload
        },
        setCapsLock:(state, action)=>{
            state.isCapsLockOn = action.payload
        },
        toggleCapsLock:(state)=>{
            state.isCapsLockOn = !state.isCapsLockOn
        },
        handleBackSpace:(state)=>{
            state.text = state.text.slice(0,state.text.length-1)
        },
    }
})

export const {updateText, toggleCapsLock, setCapsLock, handleBackSpace} = keyboardSlice.actions
export default keyboardSlice.reducer