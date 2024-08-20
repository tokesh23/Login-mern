 import React, { useEffect, useState } from 'react'
 import axios from "axios"
 import "./App.css"
 
 const App = () => {

  const [data,setData]=useState("")


  useEffect (()=>{


    const fetchData= async ()=>{
      try {
        const response= await axios.get("http://localhost:4020/api/get")

        console.log(response.data)
        setData(response.data)


      } catch (error) {
        console.error("error not fetch:", error)
        
      }
    }

    fetchData();
  },[])
   
  
   return (
     <div className='div1'>
      <h1>Login</h1>
      <div className='contianer'>
      <input type="text" placeholder='usertext' />
      <input type="text" placeholder='password'/>
      <button className='btn'>Click</button>
      </div>

     </div>
   )
 }
 
 export default App