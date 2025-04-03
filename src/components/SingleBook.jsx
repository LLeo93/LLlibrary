import React, { Component } from 'react';
import { Card, OverlayTrigger, Tooltip, ListGroup } from 'react-bootstrap';
import fantasy from '../Data/fantasy.json'; // Supponiamo che 'book' arrivi come prop
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import CommentArea from './CommentArea'; // Importa CommentArea
import AddComment from './AddComment'; // Corretto l'import di AddComment

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

  // Funzione per aggiornare i commenti
  handleNewComment = () => {
    console.log('Nuovo commento aggiunto!');
    // Qui potresti voler ricaricare i commenti o eseguire altre azioni
  };

  render() {
    const { book, selected } = this.state;

    // Stile condizionale per il bordo rosso quando il libro è selezionato
    const cardStyle = {
      width: 400,
      transition: 'transform 0.3s ease-in-out', // Animazione fluida
      ...(selected && { border: '2px solid red' }), // Bordo rosso se selezionato
    };

    return (
      <Card
        className="card"
        style={cardStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
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
            }}
            onClick={this.handleSelectToggle} // Click sulla copertina per selezionare
          />
        </div>

        <Card.Body className="card-body col-12 col-md-6 col-lg-3 m-2 p-2">
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

        {/* Se il libro è selezionato, mostra i commenti */}
        {selected && (
          <>
            <CommentArea bookId={book.id} />{' '}
            {/* Aggiungi la sezione dei commenti */}
            {book.id && (
              <AddComment
                bookId={book.id}
                onNewComment={this.handleNewComment}
              />
            )}
          </>
        )}
      </Card>
    );
  }
}

export default SingleBook;
