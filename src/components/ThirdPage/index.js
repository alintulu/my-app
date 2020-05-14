import React, { Component } from 'react'
import ScreenHeader from '../ScreenHeader';
import Gallery from '../Gallery';

//<ScreenHeader title="Plants"/>
//<Gallery elements={students}/>

const ThirdPage = ({demo}) => {
    console.log("Reducer third page is ", {demo})

    return (
        <div className='ThirdPage'>
            <ScreenHeader id="home-header" title="Page Three"/>
            <Gallery elements={demo}/>
        </div>
        );
    }

export default ThirdPage