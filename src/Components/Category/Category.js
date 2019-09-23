import React from "react";
import "./Category.scss";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { selectCategories } from "../../Redux/Category/category-selectors";
import { getProductList } from "../../Redux/Product/product-actions";
import { toggleMoreItems } from "../../Redux/Toggle/toggle-actions";
import { selectToggleMoreItems } from "../../Redux/Toggle/toggle-selectors";
import { setTabValue } from "../../Redux/Tab/tab-actions";
import { selectTabValue } from "../../Redux/Tab/tab-selectors";
import { ScrollToTab } from "../../Utils/ScrollToTab";
import ProductList from "../../Components/ProductList/ProductList";

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: 40,
    marginBottom: 60
  }
}));

const Category = ({ categories, dispatch, loadMore, value }) => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const tabRef = React.createRef();

  React.useEffect(() => {
    const categoryItem = categories.filter((item, index) => index === value);
    const id = categoryItem[0].category_id;
    const categoryName = categoryItem[0].category_name;
    setName(categoryName);
    dispatch(getProductList(id));
  }, [value]);

  function handleChange(event, newValue) {
    dispatch(setTabValue(newValue));
    return loadMore ? dispatch(toggleMoreItems()) : null;
  }

  return (
    <div className={classes.root}>
      <h1 className="category-title">Our Products</h1>
      <h1 className="category-sub">
        No harmful Chemicals. Sulphates & Paraben Free. No Side Effectsss.
      </h1>
      <AppBar position="static" className="appbar" ref={tabRef}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="scrollable"
          scrollButtons="off"
          className="tabs"
          TabIndicatorProps={{ style: { background: "#157ebc" } }}
        >
          {categories.map(
            ({ category_name, category_id, category_image }, index) => (
              <Tab
                id={category_id}
                label={
                  <span style={{ color: index === value ? "#157ebc" : "" }}>
                    {category_name}
                  </span>
                }
                {...a11yProps(index)}
                className="tab"
                style={{ backgroundImage: `url(${category_image})` }}
              />
            )
          )}
        </Tabs>
      </AppBar>
      <ProductList divRef={tabRef} />
    </div>
  );
};

const mapStateToProps = state => ({
  categories: selectCategories(state),
  loadMore: selectToggleMoreItems(state),
  value: selectTabValue(state)
});

export default connect(mapStateToProps)(Category);
