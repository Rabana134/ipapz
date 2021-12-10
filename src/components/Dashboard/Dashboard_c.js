import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar2 from '../Navbar/Navbar2';


function Dashboard_c() {
    return (
        <div>
        <Navbar2 title={"Privacy and Security"}/>
        <div className="dashboard-stats2">
<h2>Account Settings- Customer</h2>

   <Link to="/change_pass"><p><b style={{margin:"1rem"}}><i class="fas fa-key"></i>Change Password</b></p></Link>
   <Link to="/l_activity"><p><b style={{margin:"1rem"}}><i class="fas fa-map-marker"></i>Login Activities</b></p></Link>
   <Link to="/pay_sett"><p><b style={{margin:"1rem"}}><i class="fas fa-credit-card"></i>Payment</b></p></Link>
   <Link to="/noti"><p><b style={{margin:"1rem"}}><i class="fas fa-bell"></i>Notifications</b></p></Link>
   <Link to=""><p><b style={{margin:"1rem"}}><i class="fas fa-bookmark"></i>Save Login Information</b></p></Link>
   <Link to="/settings"><p><b style={{margin:"1rem"}}><i class="fas fa-user-cog"></i>Account Settings</b></p></Link>
        </div>
            <Footer/>
        </div>
    )
}

export default Dashboard_c
