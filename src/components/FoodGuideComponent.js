import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderFoodGuideItem({ food }) {
    return (
        <Card>
            <CardImg width="100%" src={food.image} alt={food.name} />
            <CardImgOverlay>
                <CardTitle>
                    <h5>{food.name}</h5>
                </CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

function FoodGuide(props) {

    const foodGuide = props.foodList.map(food => {
        return (
            <div key={food.id} className="col-sm-12 col-lg-4 mb-1">
                <RenderFoodGuideItem food={food} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {foodGuide}
            </div>
        </div>
    );
};

export default FoodGuide;