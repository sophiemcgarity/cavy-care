import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import FoodGuide from './components/FoodGuideComponent';
import { FOODLIST } from './shared/foodList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: FOODLIST
    };
  }
  render() {
    return (
      <div className="App">
          <Navbar dark color="primary">
            <div className="container"> 
              <NavbarBrand href="/">Cavy Care</NavbarBrand>
            </div>
          </Navbar>
          <FoodGuide foodList={this.state.foodList}/>
      </div>
    )
  }
}

export default App;
