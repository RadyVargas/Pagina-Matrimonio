import React from 'react';

function Nosotros() {
  return (
    <div className="nosotros-container">
      <h2 className="titulo-nosotros">Acerca de Nosotros</h2>
      <p className="texto-nosotros">
        En Candy Matrimonios nos apasiona hacer realidad bodas únicas e inolvidables.
        Desde 2010 ofrecemos productos hechos con amor, personalizados para cada pareja. 💍✨
      </p>
      <p className="texto-nosotros">
        Nuestro equipo está compuesto por diseñadores, decoradores y soñadores. Nos encanta
        compartir momentos especiales contigo.
      </p>

      <div className="testimonios-container">
        <div className="testimonio">
          <img src="img/matrimonio1.jpg" alt="Matrimonio 1" className="foto-matrimonio" />
          <p className="reseña">"Gracias a Candy Matrimonios, nuestro día fue mágico. Todo fue perfecto." - Ana & Luis</p>
        </div>
        <div className="testimonio">
          <img src="img/matrimonio2.jpg" alt="Matrimonio 2" className="foto-matrimonio" />
          <p className="reseña">"La decoración y los detalles superaron nuestras expectativas." - Camila & Pedro</p>
        </div>
        <div className="testimonio">
          <img src="img/matrimonio3.jpg" alt="Matrimonio 3" className="foto-matrimonio" />
          <p className="reseña">"Nos sentimos únicos, ¡como una película romántica!" - Fernanda & Diego</p>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;

