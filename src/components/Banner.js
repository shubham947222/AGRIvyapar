import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = ({ banner }) => {
  return (
    <Carousel fade>
      {banner.end.map((item, index) => (
        <Carousel.Item
          key={item.image}
          name={item.name}
          interval={1000}
          keyboard={true}
        >
          <img
            id="bannerImage"
            className="d-block w-100"
            src={item.image}
            alt={`${index} banner`}
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.source}</p>
            <u>Read More</u>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
