import React, { Component } from "react";
import Menu from "./Menu";
import DishDetails from "./DishDetails";
import { DISHES } from "../shared/dishes";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./Aboutus";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {
    const Homepage = () => {
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          promotion={this.state.promotions.filter(promo => promo.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetails
          dish={
            this.state.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(comment => comment.dishId, 10)}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
