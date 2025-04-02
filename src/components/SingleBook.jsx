import React, { Component } from 'react';
import { Card, OverlayTrigger, Tooltip, ListGroup } from 'react-bootstrap';
import fantasy from '../Data/fantasy.json'; // Supponiamo che 'book' arrivi come prop

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false, // Inizialmente il libro non è selezionato
      book: this.getRandomBook(), // Carica un libro casuale all'inizio
    };
  }

  // Metodo per il toggle della proprietà 'selected'
  handleSelectToggle = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  // Funzione per ottenere un libro casuale da fantasy
  getRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * fantasy.length); // Genera un indice casuale
    return fantasy[randomIndex]; // Restituisce il libro alla posizione casuale
  };

  render() {
    const { book, selected } = this.state;

    // Aggiungi uno stile condizionale per il bordo rosso quando il libro è selezionato
    const cardStyle = selected
      ? { border: '2px solid red' } // Bordo rosso quando è selezionato
      : {};

    return (
      <Card className="card" style={cardStyle}>
        <div
          style={{
            overflow: 'hidden',
            width: '100%',
            height: '300px',
          }}
        >
          <Card.Img
            variant="top"
            src={book.img}
            alt={book.title}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            onClick={this.handleSelectToggle} // Aggiungi il click sulla copertina per togglare lo stato
          />
        </div>

        <Card.Body className="card-body">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{book.title}</Tooltip>}
          >
            <Card.Title className="card-title">{book.title}</Card.Title>
          </OverlayTrigger>
          <Card.Text className="card-text">{book.category}</Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item>Prezzo: {book.price}€</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Dettagli</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
