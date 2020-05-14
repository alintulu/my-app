import React from 'react';
import ScreenHeader from '../ScreenHeader';
import './Dashboard.css';
import logo from '../../cms-logo.png';

const Dashboard = ({details, demo}) => {
  return (
    <div className="Home">
      <div className="Home-text">
        <img src={logo} className="App-logo" alt="logo" />
        <ScreenHeader id="home-header" title="Service for CMSSW Docker image building"/>
        <p>Build your CMS docker images!</p>
      </div>
    </div>
  );
}

export default Dashboard;