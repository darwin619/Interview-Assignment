import React from "react";
import "./ProductItem.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../CustomButton/CustomButton";
import Fade from "react-reveal/Fade";

const ProductItem = ({
  item: { name, price, final_price, rating, weight, image_urls, is_in_stock }
}) => {
  return (
    <Fade>
      <div className="product_item">
        <div className="product_item__image-container">
          <img
            src={image_urls.x408}
            alt="product_image"
            className="product_item__image"
          />
        </div>
        {rating ? (
          <div className="product_item__rating-container">
            <span className="product_item__rating">{rating}/</span>
            <span className="product_item__five">5</span>
            <FontAwesomeIcon
              icon={faStar}
              className="product_item__rating-icon"
            />
          </div>
        ) : null}
        <div className="text-box">
          <span className="text-box__name">{name}</span>
          {weight ? (
            <span className="text-box__weight">({weight}gm)</span>
          ) : null}
          <div className="text-box__price-container">
            <span className="text-box__final-price">&#8377; {final_price}</span>
            <span className="text-box__price">&#8377; {price}</span>
          </div>
          {is_in_stock ? (
            <CustomButton>Add To Cart</CustomButton>
          ) : (
            <CustomButton outofstock>Out Of Stock</CustomButton>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default ProductItem;
