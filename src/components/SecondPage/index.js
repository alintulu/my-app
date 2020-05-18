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
                </div>
                
                <div class="split left">
                    <div class="centered">
                        <div style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}>
                            <p className="Page-text">1. Start by choosing a CMSSW release. You have chosen</p>
                            <p className="Chosen-text">{props.buildImage.image === "" ? "None" : props.buildImage.image}</p>
                            <p className="Page-text">2. Choose the SCRAM ARCH version. You have chosen</p>
                            <p className="Chosen-text">{props.buildImage.scram_arch === "" ? "None" : props.buildImage.scram_arch}</p>
                        </div>
                    </div>
                </div>
  

                <div class="split right">
                    <div class="centered">
                        <div style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}>
                            <p><ComboBox books={releases} kind="release" text="CMSSW releases"/></p>
                            <p> <ComboBox2 books={compatible_scram_archs} kind="scram_arch" text="SCRAM ARCH versions"/></p>
                        </div>
                    </div>
                </div> 
        </div>
    );
}

export default SecondPage