import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/comimp.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Community development is a vital process that empowers individuals and groups within a community to actively participate in identifying and addressing their needs and aspirations. At its core, it seeks to improve the social, economic, and environmental well-being of communities, fostering a sense of ownership, resilience, and sustainable progress.One of the key principles of community development is inclusivity, ensuring that all members of the community have a voice and are involved in decision-making processes. ",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "Transparency is more than a value; it's our promise to you. We believe in open communication, honesty, and accountability in all our dealings. By being transparent, we build trust, foster engagement, and drive better outcomes for everyone involved. Thank you for your trust and support as we continue on this journey together.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
         "We gauge our footprint. By quantifying our actions, we stay accountable, strive for improvement, and celebrate successes. Through data and feedback, we assess our environmental, social, and economic impact. It's our commitment to transparency and responsible business practices. Join us in creating a better world.",
    },
  ];
  return (
    <>
      <div className="bgcolor">
        <div className="container9">
        <h2 className="heading1">OUR QUALITIES</h2>
          {qualities.map((elememt) => {
            return (
              <div className="card2" key={elememt.id}>
                <div className="img-wrapper">
                  <img className="imgsi"src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p  className='fn2'>{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;