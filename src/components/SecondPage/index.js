import React, { Component } from 'react'
import ScreenHeader from '../ScreenHeader';
import './SecondPage.css';
import Table from '../Table'

const SecondPage = ({demo}) => {
    const students = { //state is by default an object
        students: [
           { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
           { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
           { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
           { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
           { id: 5, name: 'Adelina', age: 26, email: 'asad@email.com' }
        ]
    }
    console.log("const is", {students});
    console.log("Reducer three is", {demo});
    return (
        <div className="Home">
            <div className="Background" style={{backgroundImage: 'url("./plants.jpg")' }}></div>
            <div className="Home-text">
                <ScreenHeader id="home-header" title="Page two"/>
                <Table students={demo}/>
            </div>
        </div>
    );
}

export default SecondPage