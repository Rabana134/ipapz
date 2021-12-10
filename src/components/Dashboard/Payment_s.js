import React, { useEffect, useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import firebase from 'firebase/compat/app'
import Navbar2 from "../Navbar/Navbar2"
import Footer from "../Footer/Footer"
import app from "../../firebase"

function Payment_s() {
    const [dchecked1, setChecked1d] = useState();
   
    const [message, setMessage] = useState("")
    const { currentUser } = useAuth()
    var Uid = currentUser.uid;

    useEffect(() => {
     
        app.database().ref('users/'+Uid+'/pay_s/allow_pay_save').on("value", snapshot => {
          if (snapshot.exists()) {
           setChecked1d(snapshot.val()) 
          }else{
            setChecked1d(false) 
          }
        });
      }, [])

      const [checked1, setChecked1] = useState(dchecked1);
      function handleClick(e){
        setChecked1(!checked1) 
        if (checked1) {
          app.database().ref('users/'+Uid+'/pay_s').set({
          allow_pay_save: true
          })
        }
        else 
        {
          app.database().ref('users/'+Uid+'/pay_s').set({
                allow_pay_save: false
                })  
        }
        setMessage("Successful")
       
      }

    return (
        <div>
        <Navbar2 title={"Privacy"}/>
<div className='dashboard-stats'>
<h2>Notification</h2>
<p style={{color: "green"}}>{message}</p> 
           <div style={{display:"block",margin:"2rem"}}>
                <label>
                Allow iPapz to save payment details
 <input type="checkbox"
   defaultChecked= {dchecked1}
   onChange={() => setChecked1(!checked1)}
 />

</label>  
           </div>
<button className="form-inputlogin-btn" type='submit' style={{
       width: "100%",
       
       margin:"2rem 0",
       display:"block"
      
   }} onClick={handleClick}>
     Confirm
   </button> 
           </div>
         
<Footer/>
   </div>
    )
}

export default Payment_s
