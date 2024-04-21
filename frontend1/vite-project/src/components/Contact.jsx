import React, { useState } from 'react'

const Contact = () => {
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  const handleSentMessage =(e)=>{
   
    e.preventDefault();
  }


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