import React, { useState } from "react";
import "./Footer.scss";
import { connect } from "react-redux";
import { selectCategories } from "../../Redux/Category/category-selectors";
import Fade from "react-reveal/Fade";
import {
  toggleMoreItems,
  toggleHideDropdown
} from "../../Redux/Toggle/toggle-actions";
import {
  selectToggleMoreItems,
  selectDropdownHidden
} from "../../Redux/Toggle/toggle-selectors";
import Dropdown from "../Dropdown/Dropdown";
import onClickOutside from "react-onclickoutside";
import { selectTabValue } from "../../Redux/Tab/tab-selectors";

class Footer extends React.Component {
  handleClickOutside = () => {
    return this.props.hidden ? null : this.props.dispatch(toggleHideDropdown());
  };

  render() {
    const { categories, dispatch, loadMore, hidden } = this.props;
    return (
      <Fade>
        <div
          className="footer"
          onClick={() => (hidden ? null : dispatch(toggleHideDropdown()))}
        >
          <div className="footer__inner">
            <div className="footer__start">
              <span
                className="footer__category"
                onClick={() => dispatch(toggleHideDropdown())}
              >
                Showing For
                <span>name</span>
              </span>
            </div>
            <div className="footer__end">
              <span
                className="footer__category-change"
                onClick={() => dispatch(toggleHideDropdown())}
              >
                change
              </span>
              <span
                className="footer__view-more"
                onClick={() => dispatch(toggleMoreItems())}
              >
                {loadMore ? "view less" : "view more"}
              </span>
            </div>
          </div>
          {hidden ? null : (
            <Dropdown onClick={() => dispatch(toggleHideDropdown())} />
          )}
        </div>
      </Fade>
    );
  }
}

const mapStateToProps = state => ({
  categories: selectCategories(state),
  loadMore: selectToggleMoreItems(state),
  hidden: selectDropdownHidden(state),
  value: selectTabValue(state)
});

export default connect(mapStateToProps)(onClickOutside(Footer));
