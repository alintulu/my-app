import React from 'react';
import ScreenHeader from '../ScreenHeader';
import './Dashboard.css';

const Dashboard = ({details, demo}) => {
  console.log("Reducer two is", {demo});
  return (
    <div className="Home">
      <div className="Background" style={{backgroundImage: 'url("./plants.jpg")' }}></div>
      <div className="Home-text">
        <ScreenHeader id="home-header" title="CMS-CLOUD CMSSW-Build-Service"/>
        <p>Build your CMS docker images!</p>
      </div>
    </div>
  );
}

export default Dashboard;