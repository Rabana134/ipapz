import React, { useEffect, useRef, useState } from 'react'
import firebase from 'firebase/compat/app'
import { Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import './Form.css';
import app, { auth } from '../firebase';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()
  const [user, setUser] = useState(null);
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  
  const handleGoogle = () => {
    auth.signInWithPopup(provider).then((res) => {
      app.auth().onAuthStateChanged(user => {
        if (user) {
           setUser(user);
           app.database().ref().child('users/'+user.uid+"/type").on('value', snapshot => {
             if (!snapshot.exists()) {
              app.database().ref('users/'+user.uid).set({
                username:user.displayName,
                email:user.email,
                phone:user.phoneNumber,
                type:"customer"
              })
             }
           })
       
        if(!user.emailVerified){
          setError("Please Verify Your Account")
        }else{
         history("/auth")
        }
        }
      })
    }).catch((error) => {
      console.log(error.message)
    })
  }
  async function handleSubmit(e) {
    e.preventDefault()
  
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value).then(userCredentials => {
        const user = userCredentials.user;
        if(!user.emailVerified){
          setError("Please Verify Your Account")
        }else{
         history("/auth")
        }
      })
      .catch(error)
      
      
    } catch {
      setError("Failed to log in")
    }
    setLoading(false)
  }

    return (
        <div>
        <Navbar></Navbar>
      <div className='dashboard-stats2'>
      <button className='report-btn' type='submit' onClick={handleGoogle}>
      <i class="fab fa-google" style={{marginRight:"2rem", color:"blue"}}></i>Sign in with Google
        </button>
        <div><h3>- or -</h3></div> 
      <form onSubmit={handleSubmit} className='form' >
      <p style={{color: "red"}}>{error}</p>
      <div className='form-inputs'>
          <label className='form-label'>Email*</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            ref={emailRef} 
            required={true}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password*</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            ref={passwordRef}
            required={true}
          />
        </div>
        <div>
        <input type="checkbox" />
            <p style={{fontSize:"13px", display:"inline"}}><b>Keep me signed in</b></p>
        </div>
        <button className="form-inputlogin-btn" type='submit' disabled={loading} style={{
            width: "100px",
            margin:"2rem auto",
            display:"table"
           
        }}>
          Log in
        </button> 
        
        <div>
         <p className="form-content-right" style ={{ width:"100%"}}><Link to="/forgot-password">Forgot password?</Link></p>   
        </div> 
       
      </form>
      </div>
      <Footer></Footer>
    </div>
    )
}

export default Login
