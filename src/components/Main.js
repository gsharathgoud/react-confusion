import React, { Component } from "react";
import Menu from "./Menu";
import DishDetails from "./DishDetails";
import { DISHES } from "../shared/dishes";
import Header from "./Header";
import Footer from "./Footer";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    console.log("Main Component render invoked");
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.onDishSelect(dishId)}
        />
        <DishDetails
          selectedDish={
            this.state.dishes.filter(
              selectedDish => selectedDish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}
