import React, { Component } from 'react'
import './Topnavbar.css'
import Sidebar from './Sidebar';

import {Navbar, Nav, NavDropdown, Button, FormControl, Form} from 'react-bootstrap'

class Topnavbar extends Component {
    handleHamClick(){
        const sn = document.getElementById("snav")
        if (sn.style.display === "none") {
            sn.style.display = "block";
        } 
        else {
            sn.style.display = "none";
        }
    }
    render() {
        return (
            <div>
                <Navbar bg="light" expand="xl" className="fixed-top">
                    <Navbar.Brand href="#home"><div style={{margin: "0 150px 0 50px"}}>Senti AI</div></Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline className="ml-5">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            {/* <Button variant="outline-primary">Search</Button> */}
                        </Form>
                        <Nav className="ml-5">
                            <NavDropdown title="Language" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">bangla</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <button className="hambtn navbar-toggler navbar-toggler-right d-xl-none align-self-center btn btn-primary" onClick={this.handleHamClick} type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </Navbar>
            </div>
        )
    }
}

export default Topnavbar
