import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}
function RenderComments({ comments }) {
  const test = comments.map(comment => {
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
}
const DishDetails = props => {
  if (props.selectedDish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 mt-1">
            <RenderDish dish={props.selectedDish} />
          </div>
          <div className="col-12 col-md-5 mt-1">
            <RenderComments comments={props.selectedDish.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetails;
