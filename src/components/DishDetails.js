import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

export default class DishDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderComments(selectedDish) {
    if (selectedDish !== null) {
      const test = selectedDish.comments.map(comment => {
        return (
          <div>
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                {comment.author}, {comment.date}
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

  renderDish(selectedDish) {
    if (selectedDish !== null) {
      return (
        <Card>
          <CardImg
            width="100%"
            src={selectedDish.image}
            alt={selectedDish.name}
          />
          <CardBody>
            <CardTitle>{selectedDish.name}</CardTitle>
            <CardText>{selectedDish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.selectedDish)}
        </div>
      </div>
    );
  }
}
