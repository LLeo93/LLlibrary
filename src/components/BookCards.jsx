import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Container, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import fantasy from '../Data/fantasy.json';
import './Cards.css';

class Cards extends Component {
  render() {
    return (
      <Container>
        <Row className="g-4">
          {' '}
          {/* Gutter per distanziare le card */}
          {fantasy.map((libro) => (
            <Col key={libro.asin} xs={6} sm={6} md={4} lg={3} xl={2}>
              {/* xs=2 card, sm=2, md=3, lg=4, xl=5 */}
              <Card className="card">
                <div
                  style={{
                    overflow: 'hidden',
                    width: '100%',
                    height: '300px',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={libro.img}
                    alt={libro.title}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = 'scale(1.2)')
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = 'scale(1)')
                    }
                  />
                </div>

                <Card.Body className="card-body">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{libro.title}</Tooltip>}
                  >
                    <Card.Title className="card-title">
                      {libro.title}
                    </Card.Title>
                  </OverlayTrigger>
                  <Card.Text className="card-text">{libro.category}</Card.Text>
                </Card.Body>

                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Prezzo: {libro.price}€</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Dettagli</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Cards;
