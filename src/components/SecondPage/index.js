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
import ComboBox2 from '../DownShift2';

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

    const releases = props.demo.releases;
    const compatible_scram_archs = props.buildImage.compatible_scram_arch.scram_archs.map( c => {
        var info =  {
            scram_arch: c
        }
        return info;
    })

    return (
        
        <div className="Home">
            <div className="Background"></div>
            <div className="Home-text">
                <ScreenHeader id="home-header" title="Request an image"/>
                <p>Start by choosing a CMSSW release. You have chosen</p>
                <p className="Chosen-text">{props.buildImage.image === "" ? "None" : props.buildImage.image}</p>
                <p>Next choose the SCRAM ARCH version. You have chosen</p>
                <p className="Chosen-text">{props.buildImage.scram_arch === "" ? "None" : props.buildImage.scram_arch}</p>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <ComboBox books={releases} kind="release" text="CMSSW releases"/>
                <ComboBox2 books={compatible_scram_archs} kind="scram_arch" text="SCRAM ARCH versions"/>
            </div>
            </div>
        </div>
    );
}

export default SecondPage