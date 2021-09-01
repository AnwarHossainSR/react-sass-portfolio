import React from "react";

const Service = (props) => {
  const data = props.data.data;
  console.log(data);
  return (
    <section className="services" id="services">
      <div className="container">
        <h1 className="section-heading">
          <span>My</span> Services
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="card-wrapper services-wrapper" id="services-wrapper">
          {data.map((service, index) => (
            <div className="cards" key={index}>
              <i className="fa fa-instagram ml-3 mt-4" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
