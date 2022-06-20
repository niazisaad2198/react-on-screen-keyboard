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
    }
})

export const {updateText, toggleCapsLock, setCapsLock} = keyboardSlice.actions
export default keyboardSlice.reducer