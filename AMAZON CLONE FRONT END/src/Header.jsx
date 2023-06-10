import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
// import { Navigate } from "react-router-dom";
const Header = () => {
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [{ basket, user }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header_logo"
        />
      </Link>

      <div className="header_search">
        <input type="text" name="" id="" className="headerSearchInput" />
        <SearchIcon className="header_search_logo" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option">
            <span className="header_optionLineOne">hello</span>
            <span
              style={{ cursor: "pointer" }}
              onClick={handleAuthentication}
              className="header_optionLineTwo"
            >
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerOptionBasket">
            <ShoppingBasketIcon />
            <span className="headerBasketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
