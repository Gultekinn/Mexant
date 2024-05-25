import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
const Header = () => {
  return (
    <>
    <div className="navbar">
      <div className="navbar__right">
       <div className='navbar__right__img'>
        <img src="	https://templatemo.com/templates/templatemo_574_mexant/assets/images/logo.png" alt="" />
        </div> 
      </div>
      <div className="navbar__left">
        <ul>
          <li><Link id='li' to="">Home</Link></li>
          <li><Link id='li' to="about">About</Link></li>
          <li><Link id='li' to="services">Services</Link></li>
          <li><Link id='li' to="pages">Pages</Link></li>
          <li><Link id='li' to="testimonials">Testimonials</Link></li>
<li id="li"><Link to="favorite"><FavoriteBorderRoundedIcon/></Link></li>  
<li id="li"><Link to="basket"><ShoppingCartIcon/></Link></li>
     <li><Link id='li'><button>Contact Support</button></Link></li>

        </ul>
      </div>
      </div>  
    </>
  )
}

export default Header
