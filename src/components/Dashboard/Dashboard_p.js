import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar2 from '../Navbar/Navbar2';


function Dashboard_p() {
    
    return (
        <div>
        <Navbar2 title={"Privacy and Security"}/>
        <div className="dashboard-stats2">
<h3>Account Settings- Photographer</h3>

   <Link to="/change_pass"><p><b style={{margin:"1rem"}}><i class="fas fa-key"></i>Change Password</b></p></Link>
   <Link to="/l_activity"><p><b style={{margin:"1rem"}}><i class="fas fa-map-marker"></i>Login Activities</b></p></Link>
   <Link to="/privacy"><p><b style={{margin:"1rem"}}><i class="fas fa-lock"></i>Private Account</b></p></Link>
   <Link to="/message"><p><b style={{margin:"1rem"}}><i class="fas fa-envelope-square"></i>message</b></p></Link>
   <Link to=""><p><b style={{margin:"1rem"}}><i class="fas fa-bookmark"></i>Save Login Information</b></p></Link>
   <Link to="/settings"><p><b style={{margin:"1rem"}}><i class="fas fa-user-cog"></i>Account Settings</b></p></Link>   
        </div>
            <Footer/>
        </div>
    )
}

export default Dashboard_p
