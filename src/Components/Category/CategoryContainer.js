import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCategoryFetching } from "../../Redux/Category/category-selectors";
import WithSpinner from "../WithSpinner/WithSpinner";
import Category from "./Category";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCategoryFetching
});

const CategoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Category);

export default CategoryContainer;
