import React from 'react'
import { useNavigate } from 'react-router'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'


function SignUp() {
    const history = useNavigate()
    return (
        <div>
        <Navbar></Navbar>
            <div className='dashboard-stats2'>
            <h1>Register</h1>
                <div style={{display:"inline-block", marginRight:"2rem"}}>
                <button onClick={()=>{ history("/csignup")}}>
                <i class="fas fa-user-circle" style={{fontSize:"5rem"}}></i>
                <p>Customer</p>
                </button>
                </div>
                <div style={{display:"inline-block"}}>
                <button onClick={()=>{ history("/psignup")}}>
                <i class="fas fa-camera" style={{fontSize:"5rem"}}></i>
                <p>Photographer</p>
                </button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default SignUp
