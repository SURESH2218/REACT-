import React from "react";
import "./Checkoutproduct.css";
import { useStateValue } from "./StateProvider";
// import { Navigate } from "react-router-dom";
const CheckOutproduct = ({ id, image, title, price, rating }) => {
  const [{}, dispatch] = useStateValue();

  const handleRemove = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutproduct">
      <img src={image} alt="" className="checkOutImage" />

      <div className="checkoutInfo">
        <p>{title}</p>
        <strong>Rs.{price}</strong>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={handleRemove}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckOutproduct;
