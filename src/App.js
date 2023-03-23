import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    
      
      <BrowserRouter>
    <Header></Header>

 <div>
 <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
        <Route path='/cart' exact element={<Cart></Cart>}></Route>
      </Routes>
 </div>
  </BrowserRouter>
       
    
    
    
      
      
  
  
      
      
    

      
    
   
  
  );
}

export default App;
