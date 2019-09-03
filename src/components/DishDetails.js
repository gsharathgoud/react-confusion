import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

export default class DishDetails extends Component {
  componentDidMount() {
    console.log("Dishdetail Component componentDidMount invoked");
  }

  componentDidUpdate() {
    console.log("Dishdetail Component componentDidUpdate invoked");
  }

  renderComments(dishes) {
    if (dishes.selectedDish) {
      const test = dishes.selectedDish.comments.map(comment => {
        return (
          <div key={comment.id}>
            <li>
              <p>{comment.comment}</p>
              <p>
                {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit"
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </li>
            <br />
          </div>
        );
      });
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{test}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderDish(dishes) {
    if (dishes.selectedDish) {
      return (
        <Card>
          <CardImg
            width="100%"
            src={dishes.selectedDish.image}
            alt={dishes.selectedDish.name}
          />
          <CardBody>
            <CardTitle>{dishes.selectedDish.name}</CardTitle>
            <CardText>{dishes.selectedDish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    console.log("Dishdetail Component render invoked");
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 mt-1">
            {this.renderDish(this.props)}
          </div>
          <div className="col-12 col-md-5 mt-1">
            {this.renderComments(this.props)}
          </div>
        </div>
      </div>
    );
  }
}
