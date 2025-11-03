import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import producto1 from '../assets/producto1.jpg';
import producto2 from '../assets/producto2.jpg';
import producto3 from '../assets/producto3.jpg';
import producto4 from '../assets/producto4.jpg';
import producto5 from '../assets/producto5.jpg';
import producto6 from '../assets/producto6.jpg';
import producto7 from '../assets/producto7.jpg';
import producto8 from '../assets/producto8.jpg';
import producto9 from '../assets/producto9.jpg';

function Galeria({ agregarAlCarrito }) {
  const productos = [
    { id: 1, imagen: producto1, nombre: 'Arreglo floral', precio: 5000 },
    { id: 2, imagen: producto2, nombre: 'Invitación personalizada', precio: 3000 },
    { id: 3, imagen: producto3, nombre: 'Recuerdos', precio: 6000 },
    { id: 4, imagen: producto4, nombre: 'Arreglo floral de boda', precio: 4500 },
    { id: 5, imagen: producto5, nombre: 'Ramo', precio: 4500 },
    { id: 6, imagen: producto6, nombre: 'Liliums-Mili 💕', precio: 4000 },
    { id: 7, imagen: producto7, nombre: 'Torta Boda', precio: 3500 },
    { id: 8, imagen: producto8, nombre: 'Arreglo Cena', precio: 6500 },
    { id: 9, imagen: producto9, nombre: 'Anillos de boda', precio: 6500 },
  ];

  const [verMas, setVerMas] = useState(false);
  const productosMostrados = verMas ? productos : productos.slice(0, 4);

  return (
    <section className="galeria">
      <h2>Nuestros Productos</h2>
      <div className="contenedor-productos">
        <AnimatePresence>
          {productosMostrados.map((producto, index) => (
            <motion.div
              className="tarjeta-producto"
              key={producto.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4, delay: index * 0.3 }}
            >
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>${producto.precio.toLocaleString('es-CL')}</p>
              <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button className="btn-ver-mas" onClick={() => setVerMas(!verMas)}>
        {verMas ? 'Ver menos productos' : 'Ver más productos'}
      </button>
    </section>
  );
}

export default Galeria;
