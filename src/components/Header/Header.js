import './Header.css'
import { Link } from 'react-router-dom'
// import webFilmsLogo from '../../assets/webfilmslogo.png';

function Header() {
  return (
    <header>
      <h1 className='site-name'>WebFilms not n*tfl*x</h1>
      <Link to={`/`}className="headerLink">
        <p>Home</p>
      </Link>
    </header>
  );
}

export default Header