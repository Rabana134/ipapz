import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import firebase from 'firebase/compat/app'
import Navbar2 from "../Navbar/Navbar2"
import Footer from "../Footer/Footer"
import { auth } from "../../firebase"
import PasswordStrengthBar from 'react-password-strength-bar';

function ChangePass() {
    const passwordRef = useRef()
    const NpasswordRef = useRef()
    const RpasswordRef = useRef()
    const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  
 async function handleSubmit(e) {
    e.preventDefault()
    if (!passwordRef.current.value) {
        return setError("Passwords is required")
      } else if (passwordRef.current.value < 8) {
        return setError('Password needs to be 8 characters or more');
      }
    
      if (!NpasswordRef.current.value) {
        return setError("Passwords is required")
      } else if (NpasswordRef.current.value !== RpasswordRef.current.value) {
        return setError("Passwords do not match")
      }
    try {
      setMessage("")
      setError("")
      setLoading(true)
      const emailCred  = firebase.auth.EmailAuthProvider.credential(
        firebase.auth().currentUser.email, passwordRef.current.value);
        
     await firebase.auth().currentUser.reauthenticateWithCredential(emailCred)
    .then(() => {
      return firebase.auth().currentUser.updatePassword(NpasswordRef).then(() => {
        console.log("Password updated!");
        setMessage("Password Changed successfully")
      }).catch((error) => { 
        console.log(error)
      });
    })
    
    } catch(e) {
      console.log(e)
      setError("Failed to change password")
    }
    
    setLoading(false)
  }
    return (
        <div >
        <Navbar2 title={"Change Password"}/>
 <div className='dashboard-stats2'> 
      <p style={{color: "red"}}>{error}</p>
      <p style={{color: "green"}}>{message}</p>
      <div className='form-inputs'>
          <label className='form-label'>Current password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your current password'
            ref={passwordRef} required
          />
          
           <label className='form-label'>New password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            onChange={() => setPassword(NpasswordRef.current.value)}
            placeholder='Enter your New password'
            ref={NpasswordRef} required
          />
          <PasswordStrengthBar password={password} />
           <label className='form-label'>Re-type password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Re-type password'
            ref={RpasswordRef} required
          />
        </div>
        <button className="form-inputlogin-btn" onClick={handleSubmit} disabled={loading} style={{
            width: "100%",
            
            margin:"2rem 0",
            display:"block"
           
        }}>
          Change Password
        </button> 
     
    </div>
    <Footer/>
        </div>
    )
}

export default ChangePass
