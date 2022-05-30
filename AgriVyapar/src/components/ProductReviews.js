import React from "react";
import ProductReviewCard from "./ProductReviewCard.js";
import "../styles/ProductReviews.css";
const ProductReviews = ({ productReviews }) => {
  return (
    <div className="ProductReviews">
      {productReviews.map((item, index) => (
        <ProductReviewCard
          key={item.image}
          image={item.image}
          name={item.name}
          price={item.price}
          review={item.review}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
