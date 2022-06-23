// React Bootstrap component imports
import Form from "react-bootstrap/Form";

// Redux imports
import { useSelector} from "react-redux";

const InputField=()=>{
    const input = useSelector((state) => state.kbState.text);
  return (
    <Form style={{marginBottom:'5%'}}>
          <Form.Group>
            <Form.Control
              size="lg"
              style={{ backgroundColor: "white" }}
              readOnly
              placeholder="Text"
              as="textarea"
              value={input}
              rows={3}
            />
          </Form.Group>
        </Form>
  )
}

export default InputField