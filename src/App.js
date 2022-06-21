import { useState, useEffect } from "react";

// React Bootstrap component imports
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

// Custom component imports
import Navbar from "./components/Navbar";
import KeyboardButton from "./components/KeyboardButton";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { toggleCapsLock, setCapsLock } from "./slices/KeyboardSlice";
import { FormLabel } from "react-bootstrap";

const App = () => {
  const input = useSelector((state) => state.kbState.text);
  let modifierPressed = false;
  const dispatch = useDispatch();

  useEffect(() => {
    addEventListeners();
    return removeEventListeners();
  }, []);

  const handleKeyDown = (e) => {
    const value = e.key;
    console.log(value + " down");
    if (!modifierPressed) {
      switch (value) {
        case "Shift":
          modifierPressed = true;
          dispatch(setCapsLock(true));
          break;
        case "CapsLock":
          modifierPressed = true;
          break;

        default:
          break;
      }
    }
  };
  const handleKeyUp = (e) => {
    const value = e.key;
    console.log(value + " up");
    if (modifierPressed) {
      switch (value) {
        case "Shift":
          modifierPressed = false;
          dispatch(setCapsLock(false));
          break;

        case "CapsLock":
          modifierPressed = false;
          dispatch(toggleCapsLock());
          break;

        default:
          break;
      }
    }
  };
  const checkCapsLock = () => {
    const event = document.createEvent("KeyboardEvent");
    console.log(event);
    const isCapsLockOn = event.getModifierState("CapsLock");
    if (isCapsLockOn) dispatch(toggleCapsLock());
    console.log("Caps Lock ON");
    return;
  };

  const addEventListeners = () => {
    document.addEventListener("keydown", (e) => handleKeyDown(e));
    document.addEventListener("keyup", (e) => handleKeyUp(e));
  };

  const removeEventListeners = () => {
    document.removeEventListener("keydown", (e) => handleKeyDown(e));
    document.removeEventListener("keyup", (e) => handleKeyUp(e));
  };

  /*
  1. Add text Field
  2. Add keyboard component 
  
  */

  return (
    <>
    <Navbar/>
    <Container style={{marginTop:'5%'}}>
      <Form>
        <Form.Group>
          <Form.Control size="lg" style={{backgroundColor:'white'}} readOnly placeholder="Text" as='textarea' value={input} rows={3}/>
        </Form.Group>
      </Form>
      <KeyboardButton text="A" />
    </Container>
    </>
  );
};

export default App;
