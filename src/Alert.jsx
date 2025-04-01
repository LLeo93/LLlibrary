import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Welcome On LL Library</Alert.Heading>
        <p>qui troverai i migliori libri</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default AlertDismissible;
