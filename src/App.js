import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Sorted from './components/Sorted';
import React from 'react';
import Cart from './components/Cart/Cart';






function App() {

  return (
    <div className="app">
  
      <Header/>
        <div className='header-disc'>
          <h1>Online Casino Österreich - Beste Anbieter 2024</h1>
          <h6>Suchen Sie nach einem guten Online Casino? Bei Casino.
            at liegen Sie richtig! Hier finden Sie alle wichtigen Informationen und 
            Tipps rund um das Casino Spiel im Internet oder in den Casinos Austria
            </h6>
            <h4>
            Finden Sie die besten Online Casinos in Österreich auf einen Blick!
            </h4>
        </div>
        <h1>Die besten online Glücksspiel Angebote </h1>
        <Sorted/>
        <Cart/>
    
   

    </div>
  );
}

export default App;
