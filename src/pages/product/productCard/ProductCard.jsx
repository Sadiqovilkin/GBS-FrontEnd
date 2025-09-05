import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductCard.scss";
const ProductCard = ({ data }) => {
  return (
    <section id="productCard">
      <div className="container py-3">
        <div className="row">
          {data?.slice(0,12).map((item) => (
            <div className="col-lg-4">
              <NavLink to={`/product/${item?.id}`}>
                <div className="productsCard">
                  <div className="cardImage">
                    <img src={item?.image} alt="" />
                  </div>
                  <div className="cardContent">
                    <h4>{item?.title}</h4>
                    <p>{item?.description}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
