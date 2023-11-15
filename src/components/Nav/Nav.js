import './Nav.css'
import webfilmslogo from '../../images/movie.png'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className='page-header'>
      <div className='site-name-container'>
        <img src={webfilmslogo} className="logo-image" alt="webfilms ogo" />
        <h1 className='site-name'>WebFilms</h1>
      </div>
      <div className='link-container'>
        <Link className='link-text' to={`/`}>
          <p>Home</p>
        </Link>
        <Link className='link-text' to={`/about`}>
          <p>About</p>
        </Link>
      </div>
    </div>
  );
  
}

export default Nav

