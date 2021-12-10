import React from 'react'
import { MenuItem } from './MenuItem'
import './Navbar.css'

function Navbar(props) {
    return (
        <nav className = "NavbarItems">
              <b className="navbar-logo" >{props.title}</b>
              <ul className= 'nav-menu'>
               {MenuItem.map((item,index)=>{
                   return(
                    <li key ={index} >
                    <a className={item.cName} href={item.url}>
                    {item.title}
                    </a> 
                    </li>
                   )
               })}  
               </ul>
              </nav>
    )
}

export default Navbar

Navbar.defaultProps = {
    title: 'We are excited to Have you Onboard!',
  };
