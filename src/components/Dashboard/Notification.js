import React, { useEffect, useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import firebase from 'firebase/compat/app'
import Navbar2 from "../Navbar/Navbar2"
import Footer from "../Footer/Footer"
import app from "../../firebase"

function Notification() {
    const [dchecked1, setChecked1d] = useState();
    const [dchecked2, setChecked2d] = useState();
    const [dchecked3, setChecked3d] = useState();
    const [dchecked4, setChecked4d] = useState();
    const [message, setMessage] = useState("")
    const { currentUser } = useAuth()
    var Uid = currentUser.uid;


    useEffect(() => {
     
      app.database().ref('users/'+Uid+'/noti/allow_rec').on("value", snapshot => {
        if (snapshot.exists()) {
         setChecked1d(snapshot.val()) 
        }else{
          setChecked1d(false) 
        }
      });
      app.database().ref('users/'+Uid+'/noti/allow_promo').on("value", snapshot => {
        if (snapshot.exists()) {
          setChecked2d(snapshot.val()) 
         }else{
           setChecked2d(false) 
         }
      });
      app.database().ref('users/'+Uid+'/noti/text').on("value", snapshot => {
        if (snapshot.exists()) {
          setChecked3d(snapshot.val()) 
         }else{
           setChecked3d(false) 
         }
      });
      app.database().ref('users/'+Uid+'/noti/email').on("value", snapshot => {
        if (snapshot.exists()) {
          setChecked4d(snapshot.val()) 
         }else{
           setChecked4d(false) 
         }
      });
    }, [])

    const [checked1, setChecked1] = useState(dchecked1);
    const [checked2, setChecked2] = useState(dchecked2);
    const [checked3, setChecked3] = useState(dchecked3);
    const [checked4, setChecked4] = useState(dchecked4);
    function handleClick(e){
    
      if (checked1) {
        app.database().ref('users/'+Uid+'/noti').update({
        allow_rec: true
        })
      }
      else
        {
            app.database().ref('users/'+Uid+'/noti').update({
                allow_rec: false
                })
        }
      if (checked2) {
        app.database().ref('users/'+Uid+'/noti').update({
          allow_promo: true
          })
      }
      else
        {
            app.database().ref('users/'+Uid+'/noti').update({
                allow_promo: false
                })
        }
      if (checked3) {
        app.database().ref('users/'+Uid+'/noti').update({
          text: true
          })
      }
      else
        {
            app.database().ref('users/'+Uid+'/noti').update({
                text: false
                })
        }
      if (checked4) {
        app.database().ref('users/'+Uid+'/noti').update({
          email: true
          })
      }
      else
        {
            app.database().ref('users/'+Uid+'/noti').update({
                email: false
                })
        }
      setMessage("Successful")
     
    }
    return (
        <div>
        <Navbar2 title={"Notification"}/>
<div className='dashboard-stats'>
<h2>Notification</h2>
<p style={{color: "green"}}>{message}</p> 
           <div style={{display:"block",margin:"2rem"}}>
                <label>
                Allow iPapz send recommendations on products and services
 <input type="checkbox"
   defaultChecked= {dchecked1}
   onChange={() => setChecked1(!checked1)}
 />

</label>  
           </div>
           <div style={{display:"block",margin:"2rem"}}>    
<label >
Allow iPapz send offers and promotions
 <input type="checkbox"
   defaultChecked= {dchecked2}
   onChange={() => setChecked2(!checked2)}
 />

</label>
</div>
<b>If you ticked any of the above boxes, please select how you would like us to notify you.</b>
<div style={{display:"block",margin:"2rem"}}>
 <label >
  Text
 <input type="checkbox"
   defaultChecked= {dchecked3}
   onChange={() => setChecked3(!checked3)}
 />

</label>  
</div>

<label >
Email
<input type="checkbox"
defaultChecked= {dchecked4}
   onChange={() => setChecked4(!checked4)}
 />
 
</label>
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

export default Notification
