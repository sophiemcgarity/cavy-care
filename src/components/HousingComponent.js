import React from 'react';
import { Card, CardImg, Container, Row, Col } from 'reactstrap';


function RenderHouseGuideItem({house}) {
    return (
        <Container>
            <Row className="mb-5">
                <Col>
                    <p className="mt-5">{house.text}</p>
                    <a href="https://kb.rspca.org.au/knowledge-base/what-should-i-feed-my-guinea-pigs/">More information RSPCA</a>
                </Col>
                <Col>
                <h3>{house.name}</h3>
                    <Card>
                        <CardImg src={house.image} alt={house.name} />
                    </Card>
                </Col>
            </Row>  
        </Container>
);
}

function Housing(props) {

    const housing = props.houseList.map(house => {
        return (
            <div key={house.id}>
                <RenderHouseGuideItem house={house} />
            </div>
        );
    });

    return (
        <div className="container pageContainer">
            <div className="row">
                <div className="col">
                    <h1 className="text-center">Housing</h1>
                </div>
            </div>
            <Row className="mb-5">
                <Col>
                    <h3 className="text-center">Guidelines set by the Humane Society of the United States</h3>
                    <ul>
                        <li>
                            {`One guinea pig:  7.5 square feet cage (minimum), but more is better; generally 30" x 36" is a good size.`}
                        </li>
                        <li>
                            {`Two guinea pigs:  7.5 square feet (minimum), but 10.5 square feet is preferred; generally 30" x 50" is a good size.`}
                        </li>
                        <li>
                            {`Three guinea pigs: 10.5 square feet (minimum), but 13 square feet is preferred; generally 30" x 62" is a good size.`}
                        </li>
                        <li>
                            {`Four guinea pigs: 13 square feet (minimum), but more is better; generally 30" x 76" is a good size.`}
                        </li>
                    </ul>
                </Col>
            </Row>
            <h2 className="text-center">Bedding Types</h2>
            <Row className="mt-5">
                <Col>
                    {housing}
                </Col>
            </Row>
        </div>
    );
}

export default Housing;

