import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCarrot, faHome, faIgloo, faPaw } from '@fortawesome/free-solid-svg-icons';

library.add(faCarrot, faHome, faIgloo, faPaw)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Main />
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
