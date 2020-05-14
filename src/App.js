import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import DashboardContainer from './container/DashboardContainer'
import SecondPageContainer from './container/SecondPageContainer'
import ThirdPageContainer from './container/ThirdPageContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="Content">
          <Switch>
            <Route exact path="/" component={DashboardContainer}/>
            <Route exact path="/page-two" component={SecondPageContainer}/>
            <Route exact path="/page-three" component={ThirdPageContainer}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
