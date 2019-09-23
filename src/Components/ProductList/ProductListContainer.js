import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsProductListFetching } from "../../Redux/Product/product-selectors";
import WithSpinner from "../WithSpinner/WithSpinner";
import ProductList from "./ProductList";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsProductListFetching
});

const ProductListContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProductList);

export default ProductListContainer;
