import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  Col,
  Container,
  Row,
  OverlayTrigger,
  Tooltip,
  Form,
  Button,
} from 'react-bootstrap';
import fantasy from '../Data/fantasy.json';
import history from '../Data/history.json';
import horror from '../Data/horror.json';
import romance from '../Data/romance.json';
import scifi from '../Data/scifi.json';
import './Cards.css';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      filteredBooks: this.addUniqueIdToBooks([
        ...fantasy,
        ...history,
        ...horror,
        ...romance,
        ...scifi,
      ]),
    };
  }

  // Funzione per aggiungere un ID unico a ciascun libro
  addUniqueIdToBooks = (books) => {
    return books.map((book) => ({
      ...book,
      uniqueId: `${book.asin}-${book.category}`,
      // Combina ASIN con la categoria per creare un ID unico
    }));
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchClick = () => {
    const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];
    const filteredBooks = allBooks.filter((libro) =>
      libro.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );
    this.setState({ filteredBooks: this.addUniqueIdToBooks(filteredBooks) });
  };

  render() {
    return (
      <Container>
        <div className="row mb-3 align-items-center">
          <div className="text-white">Cerca i tuoi libri preferiti</div>
          <div className="col-auto">
            <Form.Control
              type="text"
              placeholder="Cerca un libro..."
              value={this.state.searchQuery}
              onChange={this.handleSearchChange}
              className="me-2"
            />
          </div>
          <div className="col-auto">
            <Button variant="primary" onClick={this.handleSearchClick}>
              Cerca
            </Button>
          </div>
        </div>
        <Row className="g-4">
          {this.state.filteredBooks.map((libro) => (
            <Col key={libro.uniqueId} xs={6} sm={6} md={4} lg={3} xl={2}>
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

export default BookList;
