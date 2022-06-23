// React Bootstrap component imports
import Container from "react-bootstrap/Container";


// Custom component imports
import Navbar from "./components/Navbar";
import InputField from "./components/InputField";
import Keyboard from "./components/Keyboard";

const App = () => {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "3%" }}>
        <InputField />
        <Keyboard />
      </Container>
    </>
  );
};

export default App;
