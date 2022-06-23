import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { handleBackSpace, updateText } from "../slices/KeyboardSlice";

export default function KeyboardButton({
  text,
  styles,
  value,
  backSpace = false,
  special = false,
  specialFunction,
}) {
  const isCapsLockOn = useSelector((state) => state.kbState.isCapsLockOn);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (backSpace) {
      dispatch(handleBackSpace());
      return;
    }
    if (value) {
      dispatch(updateText(value));
      return;
    }
    dispatch(updateText(isCapsLockOn ? text : text.toLowerCase()));
  };

  if (special) {
    return (
      <Button style={styles} onClick={specialFunction?specialFunction:handleClick}>
        {text}
      </Button>
    );
  } else {
    return (
      <Button style={styles} onClick={handleClick}>
        {isCapsLockOn ? text : text.toLowerCase()}
      </Button>
    );
  }
}
