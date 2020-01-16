import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.text}</CardText>
            </CardBody>
        </Card>
    );
}


function Home(props) {
    return (
        <div className="container pageContainer">
            <h2>Featured Item: Feeding</h2>
            <div className="row">
                <div className="col-md">
                    <RenderCard item={props.food} />
                </div>
                <div className="col-md">
                    <RenderCard item={props.source} />
                </div>
            </div>
        </div>
    );

}

export default Home;