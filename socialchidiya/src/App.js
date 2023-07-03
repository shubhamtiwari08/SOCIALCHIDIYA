
import { Navigate, useNavigate } from 'react-router';
import './App.css';
import Landing from './Pages/Landing/Landing';
import Routing from './Routes/Route';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext/AuthContext';

function App() {

  const {isLogged,setIsLogged}=useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout=()=>{
    localStorage.removeItem("Token")
    toast.success("logged out successfully")
    setIsLogged(false)
    navigate("/login")
  }

  return (
   <div>
   <div className="logo hero-word-two nav">
          <span className='logo-name hero-word'>SOCIAL CHIDIYA</span>
          {isLogged&&<button className='button' onClick={()=>handleLogout()}> logout</button>}
      </div>    
   <Routing/>
   <ToastContainer/>
   </div> 
   
  )
}

export default App;
