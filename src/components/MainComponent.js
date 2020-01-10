import React, { Component } from 'react';
import FoodGuide from './FoodGuideComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FOODLIST } from '../shared/foodList';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: FOODLIST
    };
  }

  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/foodguide' render={() => <FoodGuide foodList={this.state.foodList} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
