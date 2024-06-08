import React, { useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  const handleSentMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        { name, email,phone,message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message);
      });
  };


  return (
    <div className='hel'>
      <form onSubmit={handleSentMessage}>
      <div className='hpp'>
      <div className='hol'>
        <h2 class="title2">CONTACT US</h2><br/> </div>
        <div className='hol'>
        <input class="how"  type="text" value={name} placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <br/><br/>
        <div className='hol'>
        <input class="how"  type="email" value={email} placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}></input></div><br/><br/>
        <div className='hol'>
        <input class="how"  type="number" value={phone} placeholder='Enter your Phone Number' onChange={(e)=>setPhone(e.target.value)}></input></div><br/><br/>
        <div className='hol'>
        <textarea class="ho4" rows="7" value={message} placeholder='Enter your The Message' onChange={(e)=>setMessage(e.target.value)}></textarea><br/><br/></div><br></br>
        <div className='hol'>
        <button class="btj" type="submit">Send Message</button>
        </div>
        </div>
      </form>
      <br/><br/>
      
    </div>
  )
}

export default Contact