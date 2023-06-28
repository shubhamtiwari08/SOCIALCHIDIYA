
import './App.css';
import Landing from './Pages/Landing/Landing';
import Routing from './Routes/Route';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <div>
   <div className="logo hero-word-two nav">
          THE  <span className='logo-name hero-word'>SOCIAL CHIDIYA</span>
      </div>    
   <Routing/>
   <ToastContainer/>
   </div> 
   
  )
}

export default App;
