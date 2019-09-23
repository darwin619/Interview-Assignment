import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import CategoryContainer from "./Components/Category/CategoryContainer";
import { getCategories } from "./Redux/Category/category-actions";
import { selectCategories } from "./Redux/Category/category-selectors";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  render() {
    return (
      <div>
        <Header />
        <CategoryContainer /> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: selectCategories(state)
});

export default connect(mapStateToProps)(App);
