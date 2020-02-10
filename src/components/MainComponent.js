import React, { Component } from 'react';
import FoodGuide from './FoodGuideComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Housing from './HousingComponent';
import Social from './SocialComponent';
import LogIn from './auth/LogIn';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FOODLIST } from '../shared/foodList';
import { SOURCES } from '../shared/sources';
import { HOUSELIST } from '../shared/housingList';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: FOODLIST,
      sources: SOURCES,
      houseList: HOUSELIST
    };
  }

//on task SPA, react router params

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

          <Route exact path='/housing' render={() => <Housing houseList={this.state.houseList} />} />

          <Route exact path='/socializing' component={Social} />

          <Route path='/login' component={LogIn} />

          <Redirect to={{pathname:'/home'}} />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
