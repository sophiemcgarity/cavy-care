import React, { Component } from 'react';
import FoodGuide from './FoodGuideComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Housing from './HousingComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FOODLIST } from '../shared/foodList';
import { SOURCES } from '../shared/sources';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: FOODLIST,
      sources: SOURCES
    };
  }

  render() {

    const HomePage = () => {
      return (
        <Home
          food={this.state.foodList.filter(food => food.featured)[0]}
          source={this.state.sources.filter(source => source.featured)[0]}
        />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/foodguide' render={() => <FoodGuide foodList={this.state.foodList} />} />
          <Route exact path='/housing' component={Housing} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
