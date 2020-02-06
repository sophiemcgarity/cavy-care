import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Fade from 'react-reveal/Fade';


function RenderCard({ item }) {
    return (
        <React.Fragment>
            <h3>{item.text}</h3>
            <Card>
                <a href={item.link}><CardImg src={item.image} alt={item.name} /></a>
                <CardBody>
                    <CardText>{item.description}</CardText>
                    <CardTitle>Continue reading at <a href={item.link}>{item.name}</a></CardTitle>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}


function Home(props) {
    return (
        <Fade up>
        <div className="container pageContainer">
            <h2>Featured Post</h2>
            <div className="row">
                <div className="col-md">
                    <RenderCard item={props.source} />
                </div>
            </div>
        </div>
        </Fade>
    );

}

export default Home;