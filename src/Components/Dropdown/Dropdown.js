import React, { useState } from "react";
import "./Dropdown.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import { toggleHideDropdown } from "../../Redux/Toggle/toggle-actions";
import { selectCategories } from "../../Redux/Category/category-selectors";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { setTabValue } from "../../Redux/Tab/tab-actions";
import { selectTabValue } from "../../Redux/Tab/tab-selectors";

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

const Dropdown = ({ categories, dispatch, value }) => {
  const classes = useStyles();

  function handleChange(event, newValue) {
    dispatch(setTabValue(newValue));
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
        className="tabs"
      >
        {categories.map(
          ({ category_name, category_id, category_image }, index) => (
            <Tab
              id={category_id}
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
            />
          )
        )}
      </Tabs>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: selectCategories(state),
  value: selectTabValue(state)
});

export default compose(
  connect(mapStateToProps),
  React.memo
)(Dropdown);
