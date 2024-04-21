import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfoundadj">
    <div >
      <h1 className='notfound'>404 Not Found</h1>
      <div className="notfoundadj">
      <button class="button-92" role="button"><Link to={"/"} className='btn1'>Back To Home</Link></button>
      </div>
    </div>
    </section>
  
  )
}

export default NotFound