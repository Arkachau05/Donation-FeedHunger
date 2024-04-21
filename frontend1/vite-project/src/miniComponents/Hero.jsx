import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className='hui'>
    <div className='sethero'>
      <h1 className='headhero'>Volunteers</h1>
      <h3 className='headhero'>Needed</h3>
      <div className='alli'>
      <p className='fn2'>
      We are reaching out to you with an urgent call for support. As we strive to make a meaningful impact on the lives of those in need, we require your invaluable assistance.<br/><br/>

Volunteers are the heart and soul of our organization, driving positive change and fostering hope within our community. Whether you can spare a few hours a week or dedicate your time on a regular basis, your contribution will make a profound difference.
<br/><br/>
Additionally, your generous donations play a crucial role in sustaining our initiatives and expanding our reach. Every contribution, no matter the size, brings us closer to realizing our shared vision of a better, brighter future for all.<br/><br/>

Together, we can create lasting change and uplift those facing adversity. Your involvement is the catalyst for transformation, and we invite you to join us in making a tangible difference in the lives of others.<br/><br/>

To volunteer or donate, please visit [FeedHunger] or contact us directly at [Donation Page] .<br/><br/>

Thank you for your unwavering support and commitment to building a stronger, more compassionate community.
      </p>
      <img className='imghero' src="/photo3 (2).png" alt="picture"/>
      </div>
      <br/><br/>
      <button class="button-55" role="button">
      <Link className="unbtn" to={"/donate"}>
        Donate Now
      </Link>
      </button>
    </div>
  </section>
  )
}

export default Hero