import React, { useEffect, useState } from "react";
import './usestate.css'

const URL = 'https://jsonplaceholder.typicode.com/users';
const ExampleUseEffect = () => {

    const [userdata,setuserdata] = useState([])
    const [loading,setLoading] = useState(false);
    const [isError,setisError] = useState({status:false,msg:''})

    const fetchUserData = async (url)=>{
        setLoading(true)
         try {
            const response = await fetch(URL);
            const data = await response.json();
            setuserdata(data) 
            setLoading(false)   
            if(response.status===404){
                throw new Error('data not found')
            }
         } catch (error) {
            setisError({status:true,msg: error.message || 'MAKE SURE THAT YOUR API IS WORKING'})
            setLoading(false)   
            
         }
    }

    useEffect(()=>{
        fetchUserData(URL)
    },[])
    if(loading){
        return <div>IT'S LOADING PLEASE WAIT FOR SOME TIME....</div>
    }
    if (isError && isError.status){
        return <div style={{color:'red'}}>{isError?.msg}</div>
    }


    return <div className="main-div">
    
            <ul>
                {
                    userdata.map((eachuser)=>{
                        const {id,name,email,username,phone,website} =eachuser;
                        return <li key={id}>
                            <div>{name}</div>
                            <div>{email}</div>
                            <div>{username}</div>
                            <div>{phone}</div>
                            <div>{website}</div>
                        </li>
                })

                }
            </ul>
    
            </div>;
};

export default ExampleUseEffect;
