import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className="text-center text-white sticky-bottom" bg="dark">
      <Card.Body className="d-flex flex-row justify-content-between">
        <div>
          <h3>LL Library</h3>
        </div>
        <div>
          {' '}
          <Card.Text>tutti i libri che vorrei</Card.Text>
        </div>
        <div>
          <Button variant="primary" href="#">
            Torna in alto
          </Button>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Footer;
