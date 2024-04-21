import React from 'react'

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/pc (1).jpg",
      title: "Alex",
    },
    {
      id: 2,
      image: "/pc (2).jpg",
      title: "Jhon",
    },
    {
      id: 3,
      image: "/pc (3).jpg",
      title: "Michael",
    },
    {
      id: 4,
      image: "/pc (4).jpg",
      title: "Rober",
    },
    {
      id: 5,
      image: "/pc (5).jpg",
      title: "Siri",
    },
    {
      id: 6,
      image: "/pc (6).jpg",
      title: "Tobey",
    },
  ];
  return (
    <>
    <div className='hui'>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">MEMBERS</h2>
            <p className='fn2'>
            Dear Esteemed Members,

Your dedication and passion are the driving forces behind our NGO's impactful work. Each day, your unwavering commitment to our mission inspires positive change and transforms lives. Together, we embody the spirit of compassion and solidarity, forging a brighter future for those in need.<br/><br/>

Thank you for your invaluable contributions, your tireless efforts, and your unwavering support. Let's continue to stand together, united in our pursuit of a more just and compassionate world.
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Members