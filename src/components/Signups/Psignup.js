import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router'
import app, { auth } from '../../firebase'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import PasswordStrengthBar from 'react-password-strength-bar'

function Psignup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const usernameRef = useRef()
    const phoneRef = useRef()
    const address1Ref = useRef()
    const address2Ref = useRef()
    const postcodeRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault() 
    
        if (!passwordRef.current.value) {
          return setError("Passwords is required")
        } else if (passwordRef.current.value < 8) {
          return setError('Password needs to be 8 characters or more');
        }
      
        if (!passwordConfirmRef.current.value) {
          return setError("Passwords is required")
        } else if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
        else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(passwordRef.current.value))
        {
          return setError("Your Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
        }
    
        if (!emailRef.current.value) {
          return setError('Email required');
        } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
          return setError('Email address is invalid');
        }
    
        if (!usernameRef.current.value) {
          return setError('Username required');
        }
       
     if (!phoneRef.current.value) {
        return setError('Telephone required'); 
        }
        try {
            setLoading(true)
            setError("")
            await signup(emailRef.current.value, passwordRef.current.value).then(userCredentials => {
                const user = userCredentials.user;
                user.sendEmailVerification();
                app.database().ref('users/'+userCredentials.user.uid).set({
                    username:usernameRef.current.value,
                    email:emailRef.current.value,
                    phone:phoneRef.current.value,
                    type:"photo"
                  })
                  app.database().ref('users/'+userCredentials.user.uid+'/address').update({
                    add1: address1Ref.current.value,
                    add2:address2Ref.current.value,
                    postc:postcodeRef.current.value
                  })
                auth.signOut();
            })
            
            history("/thanks")
            
          } catch (e) {
            setError("Failed to create an account")
            console.log(e)
          }
        setLoading(false)
  }
    return (
        <div>
        <Navbar></Navbar>
        <div className='dashboard-stats2'>
      
          <div><h3>Photographer Registration</h3></div> 
        <form onSubmit={handleSubmit} className='form' >
        <p style={{color: "red"}}>{error}</p>
        <div className='form-inputs'>
            <label className='form-label'>Username*</label>
            <input
              className='form-input'
              type='text'
              name='username'
              placeholder='Enter your username'
               ref={usernameRef}
               required
            />
            
          </div>
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
            <label className='form-label'>Phone number*</label>
            <input
              className='form-input'
              type='text'
              name='telephone'
              placeholder='Enter your Telephone'
              ref={phoneRef}
              required
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
              onChange={() => setPassword(passwordRef.current.value)}
              required={true}
            />
             <PasswordStrengthBar password={password} />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Re-enter password*</label>
            <input
              className='form-input'
              type='password'
              name='password2'
              placeholder='Confirm your password'
              ref={passwordConfirmRef} required
            />
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Address*</label>
          <input
            className='form-input'
            required={true}
            placeholder= "Address 1"
            ref={address1Ref}
          />
          <input
            className='form-input'
            placeholder= "Address 2- optional"
            ref={address2Ref}
          />
          <input
            className='form-input'
            required={true}
            placeholder= "Post Code"
            ref={postcodeRef}
          />
        </div>
          <button className="form-inputlogin-btn" type='submit' disabled={loading} style={{
              width: "100px",
              margin:"2rem auto",
              display:"table"
             
          }}>
           Register
          </button> 
          
          <div>
          <p style={{fontSize:"13px", display:"inline"}}><b>Do You Already Have An Account? <Link to="/login" >Sign In</Link></b></p>
           
          </div> 
         
        </form>
        </div>
        <Footer></Footer>
      </div>
    )
}

export default Psignup
