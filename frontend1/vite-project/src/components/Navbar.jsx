import React, { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div>
      <div className="bgcolor"><img src="/public/logo1.png" alt="logo" width={265}/></div>
    <nav>
    <ul>
    <li><Link to={"/"}>HOME</Link></li>
    <li><Link to={"/about"}>ABOUT US</Link></li>
    <li><Link to={"/donate"}>DONATE</Link></li>
    <li><Link to={"/Contact"}>CONTACT</Link></li>
  </ul>
</nav>
</div>

  )
};

export default Navbar;