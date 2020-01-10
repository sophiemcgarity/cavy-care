import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderFoodItem({ food }) {
    return (
        <div className="col-md-5">
            <Card>
                <CardImg top src={food.image} alt={food.name} />
                <CardBody>
                    <CardTitle>{food.name}</CardTitle>
                    <CardText>{food.text}</CardText>
                </CardBody>
            </Card>
        </div>
    )
};

function RenderComments({comments}) {
    if (comments) {
        return (
            <ul className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment =>
                    <li key={comment.id}>
                        {comment.text}
                        <br />
                        {comment.name}
                        <br />
                    </li>
                )}
            </ul>
        );
    }

    return <div />
};



function FoodInfo(props) {
    if (props.food) {
        return (
            <div className="container">
                <div className="row">
                    <RenderFoodItem food={props.food} />
                    <RenderComments comments={props.food.comments} />
                </div>
            </div>
        )
    }
    return <div />;
};

export default FoodInfo;
