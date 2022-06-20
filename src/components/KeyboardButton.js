import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateText } from "../slices/KeyboardSlice";


export default function KeyboardButton({ text }) {
  const isCapsLockOn = useSelector((state) => state.kbState.isCapsLockOn);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateText(text));
  };

  return (
    <Button onClick={handleClick}>
      {isCapsLockOn? text : text.toLowerCase()}
    </Button>
  );
}
