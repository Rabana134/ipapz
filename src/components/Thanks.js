import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import app from '../firebase';
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

function Thanks() {
    const history = useNavigate()
    return (
        <div>
        <Navbar/>
            <div className="dashboard-stats2">
                <h2>Thank you for registering with iPapz! </h2>
                <b>Please check your email for verification</b>
                <p  style={{color: 'blue'}}
                onClick={() => {history("/login")}}>Login</p>
            </div>
        <Footer/>
        </div>
    )
}

export default Thanks
