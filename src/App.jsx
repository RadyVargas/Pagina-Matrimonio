import './estilos.css';
import logo from './assets/logo.png';
import Header from './components/Header';
import Valores from './components/Valores';
import Galeria from './components/Galeria';
import Acerca from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Carrito from './components/Carrito'; 

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => [...carritoActual, producto]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Valores />
              <Galeria agregarAlCarrito={agregarAlCarrito} />
              <Carrito carrito={carrito} /> {/* 👈 Moverlo aquí */}
            </>
          }
        />
        <Route path="/Nosotros" element={<Acerca />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}



export default App;
