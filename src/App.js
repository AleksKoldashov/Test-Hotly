import './App.css';
import Sorted from './components/Sorted';
import React from 'react';
import Cart from './components/Cart/Cart';
import HeaderBtn from './components/HeaderBtn/HeaderBtn';


function App() {

  return (
    <div className="app">
        <HeaderBtn/>
        <div className='header-disc'>
          <div className='h1baner'>
            <h1>
            Online Casino Österreich - Beste Anbieter 2024
            </h1>
          <h6>Suchen Sie nach einem guten Online Casino? Bei Casino.
            at liegen Sie richtig! Hier finden Sie alle wichtigen Informationen und 
            Tipps rund um das Casino Spiel im Internet oder in den Casinos Austria
            </h6>
          </div>
          
            <h4>
            Finden Sie die besten Online Casinos in Österreich auf einen Blick!
            </h4>
        </div>
        <Sorted/>
        <Cart/>
        
    </div>
  );
}

export default App;
