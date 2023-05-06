// import React, {useState} from 'react';
// import './LoginPage.css'
// import FormLogin from './FormLogin';
// import * as axios from 'axios';
// import { BASE_URL } from '../Login/contants'



// function LoginPage(){
//   const adminUser = {
//     email: "aarjunpatel103@gmail.com",
//     password: "parth103"
//   }
 
  
//   const [user, setUser] = useState({name: "", email: "",});
//   const[error, setError] = useState("");

//   const Login = details =>{
//     console.log(details);
    
//     if(details.email == adminUser.email && details.password == adminUser.password)
//     {
//     console.log("Logged in");
//     setError('**YOU WILL BE LOGGED IN TO PRODUCT CATALOG PAGE**')
//   }
//     else{
//       console.log("Details are incorrect");
//       setError('**PLEASE ENTER VALID DETAILS**')
//     }
  
    

//   }
  


//   return (
//     <div className='App'>
      
//       <FormLogin Login={Login} error={error}/>
      
//     </div>
//   );
  
// }
  


// export default LoginPage;