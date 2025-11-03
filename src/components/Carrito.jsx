export default function Carrito({ carrito }) {
const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);

  console.log('carrito:', carrito);
  console.log('total calculado:', total);

  return (
    <div className="carrito">
      <h2>🛒 Tu Carrito</h2>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
        
      ) : (
        <>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                {item.nombre} - ${Number(item.precio).toLocaleString('es-CL')}
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total.toLocaleString('es-CL')}</p>
        </>
      )}
    </div>
  );
}
