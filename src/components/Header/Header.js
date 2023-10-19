import './Header.css';
import webFilmsLogo from '../../assets/webfilmslogo.png';

function Header() {
  return (
    <header>
      <img
        src={webFilmsLogo}
        alt="Web Films Logo"
        className="logo-image"
      />
      <h1 className="sr-only">WebFilms</h1>
    </header>
  );
}

export default Header;