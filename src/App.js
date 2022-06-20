import { useState, useEffect } from "react";
import KeyboardButton from "./components/KeyboardButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleCapsLock, setCapsLock, } from "./slices/KeyboardSlice";

const App = () => {
  const input = useSelector((state) => state.kbState.text);
  let modifierPressed=false
  const dispatch = useDispatch();

  useEffect(() => {
    addEventListeners();
    return removeEventListeners()
  }, []);

  const handleKeyDown = (e) => {
    const value = e.key;
    console.log(value + ' down');
    if(!modifierPressed){
      switch (value) {
        case 'Shift':
          modifierPressed=true
          dispatch(setCapsLock(true))
          break;
        case 'CapsLock':
          modifierPressed=true
          break;
      
        default:
          break;
      }
    }
  }
  const handleKeyUp = (e) => {
    const value = e.key;
    console.log(value + ' up');
    if(modifierPressed){
      switch (value) {
        case 'Shift':
          modifierPressed=false
          dispatch(setCapsLock(false))
          break;
        
        case 'CapsLock':
          modifierPressed=false
          dispatch(toggleCapsLock())
          break;
      
        default:
          break;
      }
    }
  }
  const checkCapsLock = ()=>{
    const event = document.createEvent('KeyboardEvent')
    console.log(event);
    const isCapsLockOn = event.getModifierState('CapsLock')
    if(isCapsLockOn)dispatch(toggleCapsLock());console.log("Caps Lock ON");
    return
  }


  const addEventListeners =()=>{
    document.addEventListener("keydown", (e)=>handleKeyDown(e));
    document.addEventListener("keyup", (e)=>handleKeyUp(e));
  }

  const removeEventListeners =()=>{
    document.removeEventListener("keydown", (e)=>handleKeyDown(e));
    document.removeEventListener("keyup", (e)=>handleKeyUp(e));
  }

  return (
    <div>
      <h1>Text: {input}</h1>
      <KeyboardButton text="A" />
    </div>
  );
};

export default App;
