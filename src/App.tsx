import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alerVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alerVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}
      <Button color="success" onClick={() => setAlertVisible(true)}>
        Show Alert!
      </Button>
    </>
  );
}

export default App;
