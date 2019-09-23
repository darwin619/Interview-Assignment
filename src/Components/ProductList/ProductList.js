import React, { useState, useRef } from "react";
import "./ProductList.scss";
import { getProductList } from "../../Redux/Product/product-actions";
import { selectProductList } from "../../Redux/Product/product-selectors";
import ProductItem from "../ProductItem/ProductItem";
import { connect } from "react-redux";
import { compose } from "redux";
import Fade from "react-reveal/Fade";
import { toggleMoreItems } from "../../Redux/Toggle/toggle-actions";
import { selectToggleMoreItems } from "../../Redux/Toggle/toggle-selectors";
import CustomButton from "../CustomButton/CustomButton";
import Footer from "../Footer/Footer";

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const ProductList = ({ product, loadMore, dispatch, divRef }) => {
  const executeScroll = () => {
    scrollToRef(divRef);
  };
  return (
    <Fade>
      <div className="product-list-outer">
        <div className="product-list-inner">
          {product
            .filter((item, index) => index < 3)
            .map(item => (
              <ProductItem id={item.id} item={item} />
            ))}
          {loadMore
            ? product
                .filter((item, index) => index >= 3)
                .map(item => <ProductItem id={item.id} item={item} />)
            : null}
        </div>
      </div>
      <div className="product-list-button">
        {product.length > 3 ? (
          loadMore ? (
            <CustomButton
              viewall
              onClick={() => {
                executeScroll();
                dispatch(toggleMoreItems());
              }}
            >
              View Less Products
            </CustomButton>
          ) : (
            <CustomButton viewall onClick={() => dispatch(toggleMoreItems())}>
              View All Products
            </CustomButton>
          )
        ) : null}
      </div>
      <Footer />
    </Fade>
  );
};

const mapStateToProps = state => ({
  product: selectProductList(state),
  loadMore: selectToggleMoreItems(state)
});

export default compose(
  connect(mapStateToProps),
  React.memo
)(ProductList);
