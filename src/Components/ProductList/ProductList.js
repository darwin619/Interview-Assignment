import React from "react";
import "./ProductList.scss";
import { selectProductList } from "../../Redux/Product/product-selectors";
import ProductItem from "../ProductItem/ProductItem";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import { toggleMoreItems } from "../../Redux/Toggle/toggle-actions";
import { selectToggleMoreItems } from "../../Redux/Toggle/toggle-selectors";
import CustomButton from "../CustomButton/CustomButton";
import Footer from "../Footer/Footer";
import { createStructuredSelector } from "reselect";
import {ScrollToTab} from '../../Utils/ScrollToTab';

const ProductList = ({ product, loadMore, dispatch, divRef, categoryName }) => {

  const onClick = () => {
    ScrollToTab(divRef);
    setTimeout(() => {dispatch(toggleMoreItems())}, 1400)
  }
  return (
    <Fade>
      <div className="product-list-outer">
        <div className="product-list-inner">
          {
            product
            .filter((item, index) => index < 3)
            .map(item => (
              <ProductItem key={item.id} item={item} />
            ))
          }
          {
            loadMore
            ? product
                .filter((item, index) => index >= 3)
                .map(item => <ProductItem key={item.id} item={item} />)
            : null
          }
        </div>
      </div>
      <div className="product-list-button">
        {
          product.length > 3 ? (
          loadMore ? (
            <CustomButton
              viewall
              onClick={onClick}
            >
              View Less Products
            </CustomButton>
          ) : (
            <CustomButton viewall onClick={() => dispatch(toggleMoreItems())}>
              View All Products
            </CustomButton>
          )
        ) : null
        }
      </div>
      <Footer divRef={divRef} name={categoryName} />
    </Fade>
  );
};

const mapStateToProps = createStructuredSelector({
  product: selectProductList,
  loadMore: selectToggleMoreItems
});

export default connect(mapStateToProps)(ProductList);
