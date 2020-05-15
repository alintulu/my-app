import React from 'react';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { Form, FormControl } from 'react-form-control';
import { Nav, NavItem, NavLink } from 'reactstrap';
//import './Form.scss'
import Button from 'react-bootstrap/Button'

const MyForm = () => {
    return (
        <div className="Home">
            <form class="contact-form" action="">
                <p>
                    <input class="gutter" type="text" placeholder="OS"/>
                </p>
                <p>
                    <input class="gutter" type="text" placeholder="CMSSW"/>
                </p>
                <p>
                    <input type="text" placeholder="SCRAM_ARCH"/>
                </p>
                <input type="submit" value="Request image"></input>
                <Button variant="secondary" size="lg">Large button</Button>
                <button className="Fab">hey</button>
            </form>
        </div>
    );
}

export default MyForm