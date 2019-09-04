import React, { Component } from "react";
import Menu from "./Menu";
import DishDetails from "./DishDetails";
import { DISHES } from "../shared/dishes";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    const Homepage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />>
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
