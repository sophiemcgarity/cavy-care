import React from 'react';
import { Card, CardImg, Container, Row, Col } from 'reactstrap';

function RenderFoodGuideItem({ food }) {
    return (
            <Container>
                <Row className="mb-5">
                    <Col>
                    <h3>{food.name}</h3>
                    <Card>
                        <CardImg width="100%" src={food.image} alt={food.name} />
                    </Card>
                    </Col>
                    <Col>
                        <p className="mt-5">{food.text}</p>
                        <a href="https://kb.rspca.org.au/knowledge-base/what-should-i-feed-my-guinea-pigs/">More information RSPCA</a>
                    </Col>
                </Row>  
            </Container>
    );
};

function FoodGuide(props) {

    const foodGuide = props.foodList.map(food => {
        return (
            <div key={food.id}>
                <RenderFoodGuideItem food={food} />
            </div>
        );
    });

    return (
        <div className="pageContainer">
            <h1 className="text-center">Food Guide</h1>
            {foodGuide}
        </div>
    );
};

export default FoodGuide;