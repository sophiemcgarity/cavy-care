import React from 'react';
import { Container, Row } from 'reactstrap';
import Fade from 'react-reveal/Fade';

function Social() {
    return (
        <React.Fragment>
            <Container className="pageContainer">
                <Fade top>
                    <h1 className="text-center">Socializing</h1>
                </Fade>
                <Row>
                    <video
                        loop
                        autoPlay
                        muted
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "80%",
                            left: 0
                        }}
                    >
                        <source src="../../src/assets/videos/socialEating.mp4" />
                    </video>
                </Row>
            </Container>
            <Container className="social">
                <Row>
                    <h2 className="text-center">Better Together</h2>
                    <p>Your pet should only have other guinea pigs as companions. Never keep guinea pigs in the same hutch or run as rabbits, as there is a risk the guinea pigs will be bullied and seriously injured. The best combination is a pair or small group of the same sex, although neutered males and females may get along.</p>
                </Row>
                <Row>
                    <h2>Getting to Know You</h2>
                    <p>Guinea pigs are friendly and most are happy to be handled once they have got used to their new surroundings. Always use both hands to pick up a guinea pig. Place one hand across their shoulders with your thumb tucked behind the shoulder and fingers wrapped around the ribs. Hold tightly enough to be secure without squeezing and put your other hand underneath the hindquarters for support. Hold the guinea pig close to your body or sit down and put them on your lap so they feel secure.</p>
                </Row>
            </Container>
        </React.Fragment>
    );

}

export default Social;