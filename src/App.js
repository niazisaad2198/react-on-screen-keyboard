import { useEffect } from "react";
import KeyboardButton from "./components/KeyboardButton";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const input = useSelector((state) => state.kbState.text);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("keydown", (e)=>addListener(e));
    return document.removeEventListener("keydown",(e)=>addListener(e))
  }, []);

  const addListener = (e) => {
    const value = e.key;
    console.log(value);
    //dispatch
  }

  return (
    <div>
      <h1>Text: {input}</h1>
      <KeyboardButton text="A" />
    </div>
  );
};

export default App;
