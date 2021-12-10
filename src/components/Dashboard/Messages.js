import React, { useEffect, useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import firebase from 'firebase/compat/app'
import Navbar2 from "../Navbar/Navbar2"
import Footer from "../Footer/Footer"
import app from "../../firebase"

function Messages() {
    const [dchecked1, setChecked1d] = useState();
    const [dchecked2, setChecked2d] = useState();
    const [dchecked3, setChecked3d] = useState();
    const [message, setMessage] = useState("")
    const { currentUser } = useAuth()
    var Uid = currentUser.uid;


    useEffect(() => {
     
      app.database().ref('users/'+Uid+'/noti_m/allow_rec').on("value", snapshot => {
        if (snapshot.exists()) {
         setChecked1d(snapshot.val()) 
        }else{
          setChecked1d(false) 
        }
      });
      app.database().ref('users/'+Uid+'/noti_m/allow_promo').on("value", snapshot => {
        if (snapshot.exists()) {
          setChecked2d(snapshot.val()) 
         }else{
           setChecked2d(false) 
         }
      });
      app.database().ref('users/'+Uid+'/noti_m/text').on("value", snapshot => {
        if (snapshot.exists()) {
          setChecked3d(snapshot.val()) 
         }else{
           setChecked3d(false) 
         }
      });
    }, [])

    const [checked1, setChecked1] = useState(dchecked1);
    const [checked2, setChecked2] = useState(dchecked2);
    const [checked3, setChecked3] = useState(dchecked3); 
      function handleClick(e){ 
        if (checked1) {
          app.database().ref('users/'+Uid+'/noti_m').update({
          allow_rec: true
          })
        }
        else
        {
            app.database().ref('users/'+Uid+'/noti_m').update({
                allow_rec: false
                })
        }
        if (checked2) {
          app.database().ref('users/'+Uid+'/noti_m').update({
            allow_promo: true
            })
        }
        else
        {
            app.database().ref('users/'+Uid+'/noti_m').update({
                allow_promo: false
                })
        }
        if (checked3) {
          app.database().ref('users/'+Uid+'/noti_m').update({
            text: true
            })
        }
        else
        {
            app.database().ref('users/'+Uid+'/noti_m').update({
                text: false
                })
        }
        setMessage("Successful")
       
      }

    return (
        <div>
        <Navbar2 title={"Message"}/>
<div className='dashboard-stats'>
<h2>Message</h2>
<p style={{color: "green"}}>{message}</p> 
           <div style={{display:"block",margin:"2rem"}}>
                <label>
                Allow only your booked in customers to send direct messages
 <input type="checkbox"
   defaultChecked= {dchecked1}
   onChange={() => setChecked1(!checked1)}
 />

</label>  
           </div>
           <div style={{display:"block",margin:"2rem"}}>    
<label >
Allow all iPapz customers to send you direct messages
 <input type="checkbox"
   defaultChecked= {dchecked2}
   onChange={() => setChecked2(!checked2)}
 />

</label>
</div>
<label >
Allow all iPapz users to send you direct messages
<input type="checkbox"
defaultChecked= {dchecked3}
   onChange={() => setChecked3(!checked3)}
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

export default Messages
