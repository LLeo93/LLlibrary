import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CustomNavbar from './components/nav';
import Home from './components/home';
import Footer from './components/footer';
import './Body.css';
import Cards from './components/BookCards';
import './components/Cards.css';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
//svuotiamo i css index e app, qua togliamo il collegamento a app.css e colleghiamo il file css di bootstrap
// va bene anche quello min

import 'bootstrap/dist/css/bootstrap.min.css';
import AlertDismissible from './Alert';

function App() {
  return (
    <>
      <CustomNavbar tema="dark" />
      <main className="bg-dark">
        <AlertDismissible />
        <div className="container d-flex justify-content-center pt-5 mb-5">
          <SingleBook></SingleBook>
        </div>
        <BookList></BookList>
        {/*<Cards />*/}
      </main>
      <Footer />
    </>
  );
}

export default App;
