import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img
          className="homeImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="homeRow">
          <Product
            id="3434"
            title="lores"
            price="23"
            image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565715708l/51636360.jpg"
            rating={5}
          />
          <Product
            id="24244"
            title="lores"
            price="23"
            image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565715708l/51636360.jpg"
            rating={5}
          />
        </div>
        <div className="homeRow">
          <Product
            id="5555555"
            title="lores"
            price="23"
            image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565715708l/51636360.jpg"
            rating={5}
          />
          <Product
            id="9494949"
            title="lores"
            price="23"
            image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565715708l/51636360.jpg"
            rating={5}
          />
          <Product
            id="939020"
            title="lores"
            price="23"
            image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565715708l/51636360.jpg"
            rating={5}
          />
        </div>
        <div className="homeRow">
          <Product
            id="3303020"
            title="lores"
            price="23"
            image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565715708l/51636360.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
