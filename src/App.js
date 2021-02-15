import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Products from './components/Products';
import Partners from './components/Partners';
import Kontakt from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Products />
      <Partners />
      <Kontakt />
    </div>
  );
}

export default App;
