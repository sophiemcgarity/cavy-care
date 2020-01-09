import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class FoodGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFood: null
        };
    }

    onFoodSelect(food) {
        this.setState({selectedFood: food})
    }

    renderSelectedFood(food){
        if (food) {
            return (
                <Card>
                    <CardImg top src={food.image} alt={food.name}/>
                    <CardBody>
                        <CardTitle>{food.name}</CardTitle>
                        <CardText>{food.text}</CardText>
                    </CardBody>
                </Card>
            );
        }

        return <div />;
    }

    render() {

        const foodGuide = this.props.foodList.map(food => {
            return (
                <div key={food.id} className="col-sm-12 col-lg-4 mb-1">
                    <Card onClick={() => this.onFoodSelect(food)}>
                        <CardImg width="100%" src={food.image} alt={food.name} />
                        <CardImgOverlay>
                            <CardTitle>
                            <h2>{food.name}</h2>
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {foodGuide}
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-8 mb-1">
                        {this.renderSelectedFood(this.state.selectedFood)}
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodGuide;