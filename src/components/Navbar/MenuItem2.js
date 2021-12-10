import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import app, { auth } from '../../firebase'

export const MenuItem2 = [
    {
        title: <Link to="/" style={{color:"black", textDecoration: "none"}}><i class="fas fa-home"></i>Home</Link>,
        url: '',
        cName: 'nav-links'
    },

    {
        title: <Link to="/" style={{color:"black", textDecoration: "none"}}><i class="fas fa-shopping-cart"></i>Cart</Link>,
        url: '',
        cName: 'nav-links'
    },
    {
        title: <b onClick={()=>{auth.signOut() 
        }} style={{color:"black", textDecoration: "none"}}><i class="fas fa-sign-in-alt"></i>Log out</b>,
        url: '',
        cName: 'nav-links'
    },
]