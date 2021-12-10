import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase';

export const MenuItem = [
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
        title: <Link to="/login" style={{color:"black", textDecoration: "none"}}><i class="fas fa-sign-in-alt"></i>Login</Link>,
        url: '',
        cName: 'nav-links'
    },
]