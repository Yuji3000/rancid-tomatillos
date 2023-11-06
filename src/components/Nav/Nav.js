import './Nav.css'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className='page-header'>
      <div className='site-name-container'>
        <h1 className='site-name'>WebFilms</h1>

      </div>
      <div className='link-container'>
        <Link to={`/`}>
          <p>Home</p>
        </Link>

      </div>

    </div>
  );
  
}

export default Nav

  // const [show, handleShow] = useState(false)
  
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true)
  //     } else handleShow(false)
  //   })
  //   return () => {
  //     window.removeEventListener("scroll")
  //   }
  // }, [])
  
  // return (
  //   <div className='page-header'>
  //     <div className={`nav ${show && "nav__black"}`}>
  //       <h1 className='site-name'>WebFilms</h1>
  //       <Link to={`/`}className="headerLink">
  //         <p>Home</p>
  //       </Link>
  //     </div>
  //   </div>
  // );