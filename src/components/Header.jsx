import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" width="200" height="200" />
      <h1 style={{ color: 'rgb(90, 18, 224)' }}>
        Artículos para que tu matrimonio sea el día más feliz de tu vida 💍✨ ❤️
      </h1>
      <nav>
        <ul>
          <li>
            <center>
              <Link to="/" style={{ color: 'rgb(255, 2, 2)' }}>Inicio</Link>
            </center>
          </li>
          <li>
            <Link to="/nosotros" style={{ color: 'rgb(255, 2, 2)' }}>Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto" style={{ color: 'rgb(255, 2, 2)' }}>Contáctanos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
