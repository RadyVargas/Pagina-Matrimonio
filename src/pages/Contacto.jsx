import { useState } from "react";
import "../estilos.css";

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const erroresTemp = {};
    if (!formulario.nombre.trim().length < 3) erroresTemp.nombre = "El nombre es debe tener mas de 3 digitos";
    if (!formulario.email.includes("@")) erroresTemp.email = "Correo inválido.";
    if (!formulario.mensaje.trim().length < 5) erroresTemp.mensaje = "Tu mensaje es muy corto";
    return erroresTemp;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidados = validarFormulario();
    if (Object.keys(erroresValidados).length === 0) {
      alert("Mensaje enviado ✅");
      setFormulario({ nombre: "", email: "", mensaje: "" });
    } else {
      setErrores(erroresValidados);
    }
  };

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
    setErrores({ ...errores, [e.target.name]: "" });
  };

  return (
    <div className="contacto-container">
      <h2 className="titulo-contacto">Contáctanos</h2>
      <p className="texto-contacto">
        ¿Tienes alguna duda o deseas cotizar tu evento? Completa el formulario y nos pondremos en contacto contigo.
      </p>

      <form className="formulario-contacto" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
          className={errores.nombre ? "input-error" : ""}
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}

        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          name="email"
          value={formulario.email}
          onChange={handleChange}
          className={errores.email ? "input-error" : ""}
        />
        {errores.email && <p className="error">{errores.email}</p>}

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          name="mensaje"
          rows="5"
          value={formulario.mensaje}
          onChange={handleChange}
          className={errores.mensaje ? "input-error" : ""}
        ></textarea>
        {errores.mensaje && <p className="error">{errores.mensaje}</p>}

        <button type="submit" className="boton-enviar">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
