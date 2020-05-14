import React from 'react'
import ScreenHeader from '../ScreenHeader';
import './SecondPage.css';
import Table from '../Table'

const SecondPage = ({demo}) => {
    console.log("Reducer three is", {demo});
    return (
        <div className="Home">
            <div className="Home-text">
                <ScreenHeader id="home-header" title="Currently built images"/>
                <Table images={demo}/>
            </div>
        </div>
    );
}

export default SecondPage