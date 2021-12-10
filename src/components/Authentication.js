import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import app from '../firebase';
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

function Authentication() {
    const min = 0;
    const max = 10;
    const rand = min + Math.random() * (max - min);
    const { currentUser } = useAuth()
    var Uid = currentUser.uid;
    const history = useNavigate()
    const [type, setType] = useState('')

    function handleText(e) {
        app.database().ref('users/'+Uid).update({
            code:rand
          })
    }
    function handleEmail(e) {
        app.database().ref('users/'+Uid).update({
            code:rand
          })
    }
    function verify(e) {
      app.database().ref().child('users/'+Uid+"/type").on('value', snapshot => {
        if (snapshot.exists()) {
          setType(snapshot.val())
          if(type=="photo")
          {
            history("/dash_p")
          }
          else
          {
            history("/dash_c")
          }
  
        }
        else{
          history("/dash_c")
        }
      })
        
    }
    return (
        <div>
            <Navbar></Navbar>
<div className="dashboard-stats2">
<b style={{marginBottom:"5rem"}}><i class="fas fa-shield-alt"></i> Two Factor Authentication</b>
<p>Select the option to confirm your login</p>
<button onClick={handleText}><p><i class="fas fa-mobile-alt"></i> <b> Text</b></p></button>
<button onClick={handleEmail}><p><i class="fab fa-google"></i> <b> Email</b></p></button>
<div style={{margin:"2rem"}}>
      <label className='form-label'>Code</label>
          <input
            className='disc-form-input'
              placeholder='Code'
              
            />
      </div>
      <div >
      <button className='disc-input-btn' type='submit' onClick={verify}>
          Apply
        </button>
        
      </div>
</div>
            <Footer></Footer>
        </div>
    )
}

export default Authentication
