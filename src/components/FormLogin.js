import React, { useState } from "react";
import './Login.css';
import HeaderWithoutCartIcon from "./HeaderWithoutCartIcon";
import { Link } from "react-router-dom";

const FormLogin = ({Login, error}) => {
const[details, setDetails]=useState({email:"",password:""}); 

const submitHandler = e =>{
    e.preventDefault();
    Login(details);
}



    return(
        <div>
            <HeaderWithoutCartIcon></HeaderWithoutCartIcon>
        <div className="login-div">
        
        
            
     

       
        <div className="form-inner">
            <form onSubmit={submitHandler}>
                
                

                <div className="form-group">
                <label>Username::</label>
                <input type="email" placeholder="Enter Email" name="email" id="email" onChange={e => setDetails({...details,email: e.target.value})} value={details.email}></input>
                </div>


                <div className="form-group">
                <label>Password::</label>
                <input type="password" placeholder="Enter Password" name="password" id="password" onChange={e => setDetails({...details,password: e.target.value})} value={details.password}></input>
                </div>

                <div className="login-button">
                <input type="submit" value="Login" ></input>
                </div>
                

                
                
            </form>
            {(error !="") ? (<div className="error">{error}</div>) : ""}
        </div>
        </div>
        
        </div>
    )
}


export default FormLogin;