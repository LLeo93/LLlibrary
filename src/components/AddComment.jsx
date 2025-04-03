import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ADD_COMMENT_URL = 'https://striveschool-api.herokuapp.com/api/comments/';
const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlODBiYjFkNDM2ZTAwMTVkYTI3MjIiLCJpYXQiOjE3NDM2ODM3NzIsImV4cCI6MTc0NDg5MzM3Mn0.XuAPo5iiFe7-xkif_iDc7woHmCVqS3vqgC1uXWC2s_I'; // Modifica con la tua API key

const AddComment = ({ bookId, onNewComment }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);

  // Funzione per inviare il commento
  const submitComment = (e) => {
    e.preventDefault();

    if (!comment) {
      // Aggiungere un check per prevenire l'invio di commenti vuoti
      alert('Il commento non può essere vuoto');
      return;
    }

    // Verifica che il bookId sia valido
    if (!bookId) {
      alert('Errore: ID libro mancante!');
      return;
    }

    // Creazione dell'oggetto commento
    const newComment = {
      comment,
      rate: rating,
      elementId: bookId, // Passa bookId come elementId
    };

    // Log per il debug
    console.log('Commento da inviare:', newComment);

    // Invio del commento tramite POST
    fetch(`${ADD_COMMENT_URL}${bookId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.message || "Errore nell'invio del commento");
          });
        }
        return response.json();
      })
      .then(() => {
        alert('Commento inviato con successo!');
        setComment('');
        setRating(1);
        onNewComment();
      })
      .catch((error) => {
        console.error('Errore:', error);
        alert('Si è verificato un errore nel salvataggio del commento');
      });
  };

  return (
    <Form onSubmit={submitComment} className="mt-3">
      <Form.Group>
        <Form.Label htmlFor="commentInput">Scrivi un commento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Aggiungi un commento..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id="commentInput"
        />
      </Form.Group>

      <Form.Group className="mt-2">
        <Form.Label htmlFor="ratingSelect">Valutazione</Form.Label>
        <Form.Control
          as="select"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          id="ratingSelect"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} ⭐
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button type="submit" variant="primary" className="mt-3">
        Invia Commento
      </Button>
    </Form>
  );
};

export default AddComment;
