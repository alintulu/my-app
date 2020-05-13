import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import DashboardContainer from './container/DashboardContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="Content">
          <Switch>
            <Route exact path="/" component={DashboardContainer}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
