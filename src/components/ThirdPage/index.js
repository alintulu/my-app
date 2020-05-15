import React from 'react'
import ScreenHeader from '../ScreenHeader';
import './ThirdPage.css'
import Gallery from '../Gallery';


const ThirdPage = ({demo}) => {
    const images = {demo}.demo.elements.images;
    console.log("Reducer third page is ", {images})
    console.log("Hey Clemens")
    return (
        <div className="Home">
            <div className="Background"></div>
            <div className="Home-text">
            <ScreenHeader id="home-header" title="Find your image"/>
            <Gallery images={images} />
         </div>
        </div>
        );
    }

export default ThirdPage