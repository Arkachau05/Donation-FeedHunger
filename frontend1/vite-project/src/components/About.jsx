import React from 'react'

const About = () => {
  return (
    <section>
    <div className='about'>
      <div>
      <div className='about1'>
      <h1 className='abouthead1'>About Us</h1>
  <p className='fn'>At Hunger Donation, we believe that no one should ever have to go to bed hungry. Founded in [2018-2019], we are a passionate team dedicated to fighting hunger and food insecurity in our community and beyond.</p></div><br/>
  </div>
  <div className='about1'>
  <h2 className='abouthead2'>Our Mission</h2>
  <p className='fn'>Our mission is simple yet profound: to alleviate hunger by providing nutritious meals to those in need, advocating for food justice, and empowering individuals and communities to overcome food insecurity</p>
  </div><br/>
  <div className='about1'>
  <h2 className='abouthead2'>Our Approach</h2>
  <p className='fn'>We take a multifaceted approach to addressing hunger. Through our network of dedicated volunteers and generous donors, we collect surplus food from restaurants, grocery stores, and food manufacturers. This food is then distributed to local food banks, shelters, and community centers, ensuring that it reaches those who need it most.
<br/><br/>
But our work doesn't stop there. We also run educational programs to promote healthy eating habits and food security. By empowering individuals with the knowledge and resources they need, we aim to create sustainable solutions to hunger.</p>
  </div><br/>
  
  <div className='about1'>
  <h2 className='abouthead2'>Get Involved</h2>
  <p className='fn'>We cannot do this important work alone. If you share our commitment to ending hunger, there are many ways you can get involved. You can donate food, volunteer your time at one of our distribution centers, or make a financial contribution to support our programs.
  <br/><br/>
Together, we can make a difference and build a world where no one goes hungry.</p><br/>
</div>  
</div>
<div>
 <div className='photoabout'>
 <img className='border' src="/photo3 (3).png" alt="photo" width={275}/>
 <img className='border' src="/photo3 (2).png" alt="photo" width={275}/>
 <img  className='border' src="/photo3 (4).png" alt="photo" width={275}/>
  </div>

 </div>
 </section>

  )
}

export default About