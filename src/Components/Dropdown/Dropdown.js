import React from "react";
import "./Dropdown.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import { selectCategories } from "../../Redux/Category/category-selectors";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { setTabValue } from "../../Redux/Tab/tab-actions";
import { selectTabValue } from "../../Redux/Tab/tab-selectors";
import { createStructuredSelector } from "reselect";
import {ScrollToTab} from '../../Utils/ScrollToTab';
import { selectToggleMoreItems } from "../../Redux/Toggle/toggle-selectors";
import { toggleMoreItems } from "../../Redux/Toggle/toggle-actions";


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 400,
    width: 250,
    position: "absolute",
    bottom: 0,
    left: 0,
    boxShadow: "0.1px 0.1px 15px 0.1px #C9C9C9"
  }
}));

const Dropdown = ({ categories, dispatch, value, divRef, loadMore }) => {
  const classes = useStyles();

  function handleChange(event, newValue) {
    dispatch(setTabValue(newValue));
    return loadMore ? dispatch(toggleMoreItems()) : null;
  }
  
  const onClick = () => {
      ScrollToTab(divRef);
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {categories.map(
          ({ category_name, category_id, category_image }, index) => (
            <Tab
              key={category_id}
              label={
                <span
                  style={{
                    color: index === value ? "#157ebc" : "",
                    width: 170,
                    textAlign: "left"
                  }}
                >
                  {category_name}
                </span>
              }
              {...a11yProps(index)}
              className="dropdown-tab"
              onClick={onClick}
            />
          )
        )}
      </Tabs>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
  value: selectTabValue,
  loadMore: selectToggleMoreItems,
});

export default compose(
  connect(mapStateToProps),
  React.memo
)(Dropdown);
