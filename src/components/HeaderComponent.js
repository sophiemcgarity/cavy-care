import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Cavy Care</h1>
                                <h2>Resource for guinea pig parents</h2>
                            </div>
                        </div>
                        <Row className="centerNav">
                            <Col>
                                <Navbar light expand="sm" >
                                    <NavbarToggler className="navToggler" onClick={this.toggleNav} />
                                    <Collapse isOpen={this.state.isNavOpen} navbar>
                                        <Nav navbar>
                                            <NavItem>
                                                <NavLink className="nav-link mr-4" to="/home">
                                                    <i /><FontAwesomeIcon icon="home" className="mr-2" />Home
                                            </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link mr-4" to="/foodguide">
                                                    <i /><FontAwesomeIcon icon="carrot" className="mr-2" />Food
                                            </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link mr-4" to="/housing">
                                                    <i /><FontAwesomeIcon icon="igloo" className="mr-2" />Housing
                                            </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link mr-4" to="/socializing">
                                                    <i /><FontAwesomeIcon icon="paw" className="mr-2" />Socializing
                                            </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link mr-4" to="/login">
                                                    <i /><FontAwesomeIcon icon="paw" className="mr-2" />Login/SignUp
                                            </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                            </Col>
                        </Row>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;