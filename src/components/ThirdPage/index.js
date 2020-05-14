import React from 'react'
import ScreenHeader from '../ScreenHeader';
import './ThirdPage.css'
import Gallery from '../Gallery';

//<ScreenHeader title="Plants"/>
//<Gallery elements={students}/>

const ThirdPage = ({demo}) => {
    console.log("Reducer third page is ", {demo})

    return (
        <div className="Home">
            <div className="Background" style={{backgroundImage: 'url("./plants.jpg")' }}></div>
            <div className="Home-text">
            <ScreenHeader id="home-header" title="Find your image"/>
            <Gallery elements={demo}/>
         </div>
        </div>
        );
    }

export default ThirdPage