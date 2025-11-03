import { useState } from 'react';

function Valores() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <section>
      <p className="bienvenido">¡Bienvenido a Candy Matrimonios!</p>
      <p className="destacado">🌸 Encuentra todo lo que necesitas para que tu boda sea inolvidable.</p>
      <p className="justificado">
        Desde decoración elegante hasta recuerdos personalizados, en Candy Matrimonios nos encargamos de hacer realidad
        tus sueños. Calidad, estilo y cariño en cada detalle 💖.
      </p>

      <h3>🎯 Nuestros Valores:</h3>
      <div id="leermas-container">
        <p>
          En Candy Matrimonios buscamos ayudarte a hacer realidad tu boda soñada...
        </p>

        {mostrar && (
          <p>
            Desde el primer detalle hasta la entrega del último recuerdo, te acompañamos con dedicación. Nuestro equipo
            diseña, personaliza y entrega todo lo necesario para que vivas la boda que siempre imaginaste, sin estrés y
            con mucho amor.
          </p>
        )}

        <button onClick={() => setMostrar(!mostrar)}>
          {mostrar ? 'Leer menos' : 'Leer más'}
        </button>
      </div>

      <ul>
        <li>✨ Compromiso con tu felicidad</li>
        <li>💌 Atención personalizada</li>
        <li>🕊️ Productos únicos y de calidad</li>
      </ul>

      <h3>Para una mejor experiencia en nuestra tienda</h3>
      <h3>💬 Cosas que deberías saber antes de comprar</h3>
      <ul>
        <li>✨ Esta tienda está hecha con cariño, así que trata a quienes la atienden con el mismo cariño.</li>
        <li>📦 Si vas a comprar algo, tómate un minuto para revisar los detalles. Evita dramas de último momento.</li>
        <li>💡 ¿Tienes dudas? Escríbenos sin miedo. Preferimos 100 preguntas a un pedido equivocado.</li>
        <li>🎉 Cada boda es distinta, y eso nos encanta. Si tienes ideas locas o personalizaciones, ¡cuéntanos!</li>
      </ul>
    </section>
  );
}

export default Valores;
