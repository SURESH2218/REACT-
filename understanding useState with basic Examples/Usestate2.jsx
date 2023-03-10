import React, { useState } from "react";
import './usestate.css'
const Usestate2 = () => {
    const [firstName,setfirstName] = useState("")
    const [email,setemail] =useState("")
    const [password,setpassword] = useState("")
    const changeFirstName =(e)=>{
        console.log(e.target.value);
        setfirstName(e.target.value)
    }
    const changeEmail =(e)=>{
        setemail(e.target.value)
    }
    const changePassword =(e)=>{
        setpassword(e.target.value)
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        
    }

  return <div className="main-div">
    <form action="" onSubmit={handleSubmit}>

        <div className="form-content">
        <input type="text" placeholder="enter your name" value={firstName} onChange={changeFirstName}/>
        </div>      
        <div className="form-content">
        <input type="email" placeholder="enter your email" value={email} onChange={changeEmail}/>
        </div>      
        <div className="form-content">
        <input type="password" placeholder="enter your password" value={password} onChange={changePassword}/>
        </div>      
        <div className="form-button"><button type="submit">submit</button></div>
    </form>

    </div>;
};

export default Usestate2;
