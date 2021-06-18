import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const[click, setClick] =useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <>
        <nav className="navbar md:flex-row grid block flex inline-block gap-6 sticky top-0 w-full z-nav"> 
        <div className="navbar-container container flex mx-auto ">
             <div className=" nav-link-left navbar-left ">
               <span className='nav-item '>
                   <Link to='/home' className='nav-links' >
                       Hydra Boost Daily Lenses
                   </Link>
               </span>
               <span className='nav-item'>
                   <Link to='/about_us' className='nav-links' >
                      Blue Light Glasses
                   </Link>
               </span>
               <span className='nav-item'>
                   <Link to='/login' className='nav-links' >
                      Hydration Drops
                   </Link>
               </span>
             
           </div>
       
         <div className="navbar-brand absolute col-auto">
           <Link to='/home' className='navbar-logo'>
               <img src="./images/waldo-logo.png" alt="waldo logo" className="flex w-28 mx-auto mb-6"/>
           </Link>
          </div>
               <div className="menu-icon inherit" onClick={handleClick}>
               <i className={click ? 'fas fa-grip-lines-vertical' : 'fas fa-bars'}></i>
           </div>
        
          <div className="navbar-right nav-right-mob">
           <div className={click ? 'nav-menu active' : 'nav-menu'}>
               <span className='nav-item'>
                   <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                       Home
                   </Link>
               </span>
               <span className='nav-item'>
                   <Link to='/about_us' className='nav-links' onClick={closeMobileMenu}>
                      About Us
                   </Link>
               </span>
               <span className='nav-item'>
                   <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                       Login
                   </Link>
               </span>
               <span className='nav-item'>
                   <Link to='/region' className='nav-links' onClick={closeMobileMenu}>
                       US
                   </Link>
               </span>
               
           </div>
          </div>
          
           </div>
        </nav>


        </>
    )
}

export default NavBar