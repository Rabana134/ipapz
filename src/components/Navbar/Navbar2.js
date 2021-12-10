import React, { useEffect, useState } from 'react'
import app from '../../firebase'
import { MenuItem } from './MenuItem'
import { MenuItem2 } from './MenuItem2'
import './Navbar.css'

function Navbar2(props) {
const [logged, setLogged] = useState(false)
    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            if (user) {
setLogged(true)
            }
            else
            {
                setLogged(false)
            }
        })
    }, [])
    return (
        <nav className = "NavbarItems">
              <b className="navbar-logo" >{props.title}</b>
              <ul className= 'nav-menu'>
              
               {
                   logged?
                   MenuItem2.map((item,index)=>{
                   return(
                    <li key ={index} >
                    <a className={item.cName} href={item.url}>
                    {item.title}
                    </a> 
                    </li>
                   )
               })
            :
            MenuItem.map((item,index)=>{
                   return(
                    <li key ={index} >
                    <a className={item.cName} href={item.url}>
                    {item.title}
                    </a> 
                    </li>
                   )
               })
            }  
               </ul>
              </nav>
    )
}

export default Navbar2
