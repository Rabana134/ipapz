import './App.css';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/Signups/SignUp';
import Csignup from './components/Signups/Csignup';
import Psignup from './components/Signups/Psignup';
import Authentication from './components/Authentication';
import PrivateRoute from './components/PrivateRoute';
import Thanks from './components/Thanks';
import Dashboard_p from './components/Dashboard/Dashboard_p';
import Dashboard_c from './components/Dashboard/Dashboard_c';
import ForgotPassword from './components/Signups/ForgotPassword';
import ChangePass from './components/Dashboard/ChangePass';
import LoginActivity from './components/Dashboard/LoginActivity';
import Privacy from './components/Dashboard/Privacy';
import Settinguser from './components/Dashboard/Settinguser';
import Notification from './components/Dashboard/Notification';
import Messages from './components/Dashboard/Messages';
import Payment_s from './components/Dashboard/Payment_s';

function App() {
  return (
    <div className="App">
    <Router>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<SignUp/>} />
        <Route path="/csignup" element={<Csignup/>} />
        <Route path="/psignup" element={<Psignup/>} />
        <Route path="/thanks" element={<Thanks/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/auth" element={<Authentication/>} />
    <Route path="/dash_p" element={<Dashboard_p/>} />
    <Route path="/dash_c" element={<Dashboard_c/>} />
    <Route path="/change_pass" element={<ChangePass/>} />
    <Route path="/l_activity" element={<LoginActivity/>} />
    <Route path="/privacy" element={<Privacy/>} />
    <Route path="/settings" element={<Settinguser/>} />
    <Route path="/noti" element={<Notification/>} />
    <Route path="/message" element={<Messages/>} />
    <Route path="/pay_sett" element={<Payment_s/>} />
        </Routes>
    </AuthProvider>
  </Router>
    </div>
  );
}

export default App;
