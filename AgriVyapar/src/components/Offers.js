import React from "react";
import Offer from "./Offer.js";
import "../styles/offers.css";
const Offers = ({ offers }) => {
  return (
    <div className="offerSection">
      {offers.map((item, index) => (
        <Offer key={item.img} index={index} src={item.image} link={item.url} />
      ))}
    </div>
  );
};

export default Offers;
