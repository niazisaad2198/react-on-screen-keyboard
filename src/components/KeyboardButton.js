import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useSelector, useDispatch } from "react-redux";
import { updateText } from "../slices/KeyboardSlice";

export default function KeyboardButton({ text }) {
  const isCapsLockOn = useSelector((state) => state.kbState.isCapsLockOn);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateText(text));
  };

  return (
    <div>
      <Button onClick={handleClick}>
        {isCapsLockOn ? text : text.toLowerCase()}
      </Button>
    </div>
  );
}
