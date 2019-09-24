import React from "react";
import "./Footer.scss";
import { connect } from "react-redux";
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
import { createStructuredSelector } from "reselect";
import {ScrollToTab} from '../../Utils/ScrollToTab';
import { selectProductList } from "../../Redux/Product/product-selectors";


class Footer extends React.Component {

  handleClickOutside = () => {
    return this.props.hidden ? null : this.props.dispatch(toggleHideDropdown());
  };

  render() {
    const { dispatch, loadMore, hidden, divRef, product, name } = this.props;
    const onChange = () => {
      ScrollToTab(divRef);
      setTimeout(() => dispatch(toggleMoreItems()), 750)
  }
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
                <span className="footer__name" >{name}</span>
              </span>
            </div>
            <div className="footer__end">
              <span
                className="footer__category-change"
                onClick={() => dispatch(toggleHideDropdown())}
              >
                change
              </span>
              { 
                product.length > 3
                ? (loadMore 
                  ? (<span
                    className="footer__view-more"
                    onClick={onChange}>
                    view less
                  </span>)
                 : (<span
                   className="footer__view-more"
                   onClick={() => dispatch(toggleMoreItems())}>
                   view more
                 </span>))
                : null
              }
            </div>
            {console.log(product.length,loadMore)}
          </div>
          {hidden ? null : <Dropdown divRef={divRef} />}
        </div>
      </Fade>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loadMore: selectToggleMoreItems,
  hidden: selectDropdownHidden,
  value: selectTabValue,
  product: selectProductList,  
});

export default connect(mapStateToProps)(onClickOutside(Footer));
