import React, { useEffect, useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import firebase from 'firebase/compat/app'
import Navbar2 from "../Navbar/Navbar2"
import Footer from "../Footer/Footer"
import app from "../../firebase"

function Privacy() {
    const [dchecked1, setChecked1d] = useState();
    const [dchecked2, setChecked2d] = useState();
    const [dchecked3, setChecked3d] = useState();
    const [dchecked4, setChecked4d] = useState();
    const [message, setMessage] = useState("")
    const { currentUser } = useAuth()
    var Uid = currentUser.uid;


    useEffect(() => {
     
      app.database().ref('users/'+Uid+'/privacy/cust_view_p').on("value", snapshot => {
        if (snapshot.exists()) {
         setChecked1d(snapshot.val()) 
        }else{
          setChecked1d(false) 
        }
      });
      app.database().ref('users/'+Uid+'/privacy/cust_com_p').on("value", snapshot => {
        if (snapshot.exists()) {
          setChecked2d(snapshot.val()) 
         }else{
           setChecked2d(false) 
         }
      });
      app.database().ref('users/'+Uid+'/privacy/all_view_p').on("value", snapshot => {
        if (snapshot.exists()) {
          setChecked3d(snapshot.val()) 
         }else{
           setChecked3d(false) 
         }
      });
      app.database().ref('users/'+Uid+'/privacy/all_com_p').on("value", snapshot => {
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
        app.database().ref('users/'+Uid+'/privacy').update({
        cust_view_p: true
        })
      }
      else
      {
        app.database().ref('users/'+Uid+'/privacy').update({
          cust_view_p: false
          })
      }
      if (checked2) {
        app.database().ref('users/'+Uid+'/privacy').update({
          cust_com_p: true
          })
      }
      else
      {
        app.database().ref('users/'+Uid+'/privacy').update({
          cust_com_p: false
          })
      }
      if (checked3) {
        app.database().ref('users/'+Uid+'/privacy').update({
          all_view_p: true
          })
      }
      else
      {
        app.database().ref('users/'+Uid+'/privacy').update({
          all_view_p: false
          })
      }
      if (checked4) {
        app.database().ref('users/'+Uid+'/privacy').update({
          all_com_p: true
          })
      }
      else
      {
        app.database().ref('users/'+Uid+'/privacy').update({
          all_com_p: false
          })
      }
      setMessage("Successful")
     
    }
    return (
        <div>
             <Navbar2 title={"Privacy"}/>
 <div className='dashboard-stats'>
 <p style={{color: "green"}}>{message}</p> 
                <div style={{display:"block",margin:"2rem"}}>
                     <label>
      Allow only iPapz customers to view profile 
      <input type="checkbox"
        defaultChecked= {dchecked1}
        onChange={() => setChecked1(!checked1)}
      />
     
    </label>  
                </div>
                <div style={{display:"block",margin:"2rem"}}>    
    <label >
      Allow only iPapz customers to comment on posts
      <input type="checkbox"
        defaultChecked= {dchecked2}
        onChange={() => setChecked2(!checked2)}
      />
     
    </label>
    </div>
    <div style={{display:"block",margin:"2rem"}}>
      <label >
       Allow all iPapz users to view profile
      <input type="checkbox"
        defaultChecked= {dchecked3}
        onChange={() => setChecked3(!checked3)}
      />
    
    </label>  
    </div>
    
    <label >
     Allow all iPapz users to comment on posts 
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

export default Privacy
