import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menu";
import DishDetails from "./DishDetails";
import { DISHES } from "../shared/dishes";

export default class Main extends Component {
  componentDidMount() {
    console.log("Main Component componentDidMount invoked");
  }

  componentDidUpdate() {
    console.log("Main Component componentDidUpdate invoked");
  }

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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
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
      </div>
    );
  }
}
