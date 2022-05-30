import React from "react";
import "../styles/ProductReviewCard.css";
const ProductReviewCard = ({ image, price, review, name, index }) => {
  return (
    <div className="ProductReviewCard">
      <img src={image} alt={`${index} review`} />
      <h3>{review}</h3>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};

export default ProductReviewCard;
