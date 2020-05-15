import React from 'react'
import ScreenHeader from '../ScreenHeader';
import './SecondPage.css';
import Table from '../Table'
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { Form, FormControl } from 'react-form-control';
import { Nav, NavItem, NavLink } from 'reactstrap';
import MyForm from '../Form';
import DropDown from '../DropDown';
import ComboBox from '../DownShift';

//<Table images={demo}/>
//<MyForm />
//<div>
//<DropDown books={releases} text="Search CMSSW releases.." cmssw={true}/>
//</div>
//<div>
//<DropDown books={books2} text="Search SCRAM versions.." cmssw={false}/>
//</div>

const books = [
    { name: "Harry Potter" },
    { name: "Net Moves" },
    { name: "Half of a yellow sun" },
    { name: "The Da Vinci Code" },
    { name: "Born a crime" }
];
  
const books2 = [
    { name: "Harry Potter2" },
    { name: "Net Moves2" },
    { name: "Half of a yellow sun2" },
    { name: "The Da Vinci Code2" },
    { name: "Born a crime2" }
];

const SecondPage = (props) => {
    const demo = props.demo;

    const releases = {demo}.demo.releases.map(r => { return r });
    console.log("Props areee", props.demo.elements.images);

    return (
        
        <div className="Home">
            <div className="Background"></div>
            <div className="Home-text">
                <ScreenHeader id="home-header" title="Request an image"/>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <ComboBox books={releases} />
            </div>
            </div>
        </div>
    );
}

export default SecondPage