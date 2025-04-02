import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Funzione per ottenere la data attuale in formato italiano con giorno, mese, anno e orario
function getFormattedDate() {
  const options = {
    weekday: 'long', // Giorno della settimana
    day: '2-digit', // Giorno del mese (es. 02)
    month: 'long', // Nome del mese (es. gennaio)
    year: 'numeric', // Anno in formato numerico (es. 2025)
    hour: '2-digit', // Ora in formato 2 cifre (es. 08)
    minute: '2-digit', // Minuti in formato 2 cifre (es. 30)
    second: '2-digit', // Secondi in formato 2 cifre (es. 59)
  };

  // Formatta la data attuale in base alle opzioni sopra
  return new Date().toLocaleString('it-IT', options);
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: getFormattedDate(), // Imposta la data iniziale
    };
  }

  componentDidMount() {
    // Aggiorna la data ogni secondo
    this.interval = setInterval(() => {
      this.setState({ currentDate: getFormattedDate() });
    }, 1000);
  }

  componentWillUnmount() {
    // Pulisci l'intervallo quando il componente viene smontato
    clearInterval(this.interval);
  }

  render() {
    return (
      <Card className="text-center text-white sticky-bottom" bg="dark">
        <Card.Body className="d-flex flex-row justify-content-between">
          <div>
            <h3>LL Library</h3>
          </div>
          <div>
            <Card.Text>tutti i libri che vorrei</Card.Text>
          </div>
          <div>
            <Button variant="primary" href="#">
              Torna in alto
            </Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-white">
          {this.state.currentDate} {/* Data con giorno, mese, anno e orario */}
        </Card.Footer>
      </Card>
    );
  }
}

export default Footer;
