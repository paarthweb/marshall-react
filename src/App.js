import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ThankYou from './components/ThankYou';
import ValidatedLoginForm from './components/LoginForm';
import LoginForm from './components/LoginForm';
import HeaderWithoutCartIcon from './components/HeaderWithoutCartIcon';
import LoginPage from './components/LoginPage';
import HomeLogin from './Login/HomeLogin';


function App() {
  return (
    
      
      <BrowserRouter>
   

 <div>
 <Routes>
        <Route path="/home" element={<Home />}>
          
        </Route>
  
        <Route path='/cart' exact element={<Cart></Cart>}></Route>
        <Route path='/thankyou' exact element={<ThankYou></ThankYou>}></Route>
        <Route path='/' exact element={<HomeLogin></HomeLogin>}></Route>
      </Routes>
 </div>
  </BrowserRouter>
       
    
    
      
      
  
  
      
      
    

      
    
   
  
  );
}

export default App;
