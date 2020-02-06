import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Container } from 'reactstrap';
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
                    <div className="jumbo container">
                        <div className="row">
                            <div className="col">
                                <h1>Cavy Care</h1>
                                <h2>Resource for guinea pig parents</h2>
                            </div>
                        </div>
                    </div>
                    <Container>
                        <Navbar light sticky="top" expand="md">
                            <div className="container">
                                <NavbarToggler onClick={this.toggleNav} />
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link mr-4" to="/home">
                                                <i /><FontAwesomeIcon icon="home" className="mr-2"/>Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link mr-4" to="/foodguide">
                                                <i /><FontAwesomeIcon icon="carrot" className="mr-2"/>Food
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link mr-4" to="/housing">
                                                <i /><FontAwesomeIcon icon="igloo" className="mr-2"/>Housing
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link mr-4" to="/socializing">
                                                <i /><FontAwesomeIcon icon="paw" className="mr-2"/>Socializing
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </div>
                        </Navbar>
                    </Container>
                </Jumbotron>

            </React.Fragment>
        );
    }
}

export default Header;