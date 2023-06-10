import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckOutproduct from "./CheckOutproduct";
const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkOutLeft">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkoutAd"
          alt=""
        />
        <div className="checkoutTitle">
          <h3>Hello, {user?.email}</h3>
          <h2>Your shopping Basket</h2>
          {basket.map((item) => {
            return (
              <CheckOutproduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="checkOutRight">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
