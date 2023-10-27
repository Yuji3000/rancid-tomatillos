import './Nav.css'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react"

function Nav() {

  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

return (
  <div className={`nav ${show && "nav__black"}`}>
    <h1 className='site-name'>WebFilms not n*tfl*x</h1>
    <Link to={`/`}className="headerLink">
      <p>Home</p>
    </Link>
  </div>
);
}

export default Nav
// return (
//   <header>
//     <h1 className='site-name'>WebFilms not n*tfl*x</h1>
//     <Link to={`/`}className="headerLink">
//       <p>Home</p>
//     </Link>
//   </header>
// );