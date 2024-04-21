import React from 'react';
import Member from "../miniComponents/Members";
import Qualities from "../miniComponents/Qualities";
import Hero from "../miniComponents/Hero";


const Home = () => {
  return (
    <div>
      <Hero/>
      <Member/>
      <Qualities/>
    </div>
  )
}

export default Home;