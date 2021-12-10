import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import firebase from 'firebase/compat/app'
import Navbar2 from "../Navbar/Navbar2"
import Footer from "../Footer/Footer"

function LoginActivity() {
    return (
        <div>
             <Navbar2 title={"Login Activities"}/>
 <div className='dashboard-stats'> 
      
    </div>
    <Footer/>
        </div>
    )
}

export default LoginActivity
