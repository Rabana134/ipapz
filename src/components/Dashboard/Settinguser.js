import React, { useEffect, useRef, useState } from 'react'
import {getAuth, updateEmail } from "firebase/auth";
import Navbar2 from '../Navbar/Navbar2';
import Footer from '../Footer/Footer';
import app from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

function Settinguser() {
    var [name,setName] = useState("")
    var [email,setEmail] = useState("")
    var [phone,setPhone] = useState("")
    var [add1,setAdd1] = useState("")
    var [add2,setAdd2] = useState("")
    var [postc,setPostc] = useState("")
    const { currentUser } = useAuth()
    var Uid = currentUser.uid;
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const auth = getAuth();
    const address1Ref = useRef()
    const address2Ref = useRef()
    const postcodeRef = useRef()
    
    useEffect(() => {
   
          app.database().ref().child('users/'+Uid+'/username').on('value', snapshot => {
            
            setName(snapshot.val()) 
             
        })
        app.database().ref().child('users/'+Uid+'/email').on('value', snapshot => {
            
          setEmail(snapshot.val()) 
           
      })
      app.database().ref().child('users/'+Uid+'/phone').on('value', snapshot => {
            
        setPhone(snapshot.val()) 
         
    })
    app.database().ref().child('users/'+Uid+'/address/add1').on('value', snapshot => {
            
      setAdd1(snapshot.val()) 
       
  })
  app.database().ref().child('users/'+Uid+'/address/add2').on('value', snapshot => {
            
    setAdd2(snapshot.val()) 
     
})
app.database().ref().child('users/'+Uid+'/address/postc').on('value', snapshot => {
            
  setPostc(snapshot.val()) 
   
})
   
    }, [])
    async function handleSubmit(e){
      e.preventDefault()
      updateEmail(auth.currentUser, emailRef.current.value).then(() => {
        app.database().ref("users/"+Uid).update({
          username: nameRef.current.value,
          phone: phoneRef.current.value,
          email: emailRef.current.value,
        })
        app.database().ref('users/'+Uid+'/address').update({
          add1: address1Ref.current.value,
          add2:address2Ref.current.value,
          postc:postcodeRef.current.value
        })
          e.reset()
      }).catch((error) => {
        // An error occurred
        // ...
      });
       
    }
    
    return (
        <div >
        <Navbar2 title={"Account settings"}></Navbar2>
        <div>
             <div className='dashboard-stats2' >
             <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit} className="form-input">
            <div className="form-content-right">
            <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            defaultValue= {email}
            ref={emailRef} required
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Account Name</label>
          <input
            className='form-input'
              placeholder='Username'
              defaultValue= {name}
              ref={nameRef}
            />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone Number</label>
          <input
            className='form-input'
              placeholder='Telephone'
              defaultValue= {phone}
              ref={phoneRef}
            />
        </div>
      
        <div className='form-inputs'>
          <label className='form-label'>Address*</label>
          <input
            className='form-input'
            required={true}
            placeholder= "Address 1"
            defaultValue={add1}
            ref={address1Ref}
          />
          <input
            className='form-input'
            placeholder= "Address 2- optional"
            defaultValue={add2}
            ref={address2Ref}
          />
          <input
            className='form-input'
            required={true}
            placeholder= "Post Code"
            defaultValue={postc}
            ref={postcodeRef}
          />
        </div>  
<button  className="settings-input-btn" type='submit'>
          Update
        </button>
      </div>
      
            </form>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Settinguser
