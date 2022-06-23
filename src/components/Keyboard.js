import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import KeyboardButton from "./KeyboardButton";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { toggleCapsLock, setCapsLock } from "../slices/KeyboardSlice";

const Keyboard = () => {
  const row0 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const keys = [row0, row1, row2, row3];

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

  const addEventListeners = () => {
    document.addEventListener("keydown", (e) => handleKeyDown(e));
    document.addEventListener("keyup", (e) => handleKeyUp(e));
  };

  const removeEventListeners = () => {
    document.removeEventListener("keydown", (e) => handleKeyDown(e));
    document.removeEventListener("keyup", (e) => handleKeyUp(e));
  };

  const handleShiftClick =()=>{
    dispatch(toggleCapsLock())
  }

  return (
    <Col>
      {keys.map((row) => {
        return (
          <Row styles={{}}>
            {row.map((key) => {
              return (
                <Col style={{}}>
                  <KeyboardButton
                    styles={{ minWidth: "90%", marginTop: "3%" }}
                    text={key}
                  />
                </Col>
              );
            })}
          </Row>
        );
      })}
      <Row>
        <Col>
            <KeyboardButton special={true} styles={{minWidth: "90%", marginTop: "3%" }} text='Shift' specialFunction={handleShiftClick}/>
        </Col>
        <Col>
            <KeyboardButton special={true} styles={{minWidth: "90%", marginTop: "3%" }} text='Space' value={' '}/>
        </Col>
        <Col>
            <KeyboardButton special={true} styles={{minWidth: "90%", marginTop: "3%" }} backSpace={true} text='Back Space'/>
        </Col>
      </Row>
    </Col>
  );
};
export default Keyboard;
