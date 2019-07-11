import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import Page1 from './Page1';
import {BrowserRouter, Route, Link } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom"
import Acceuil from './Acceuil';
import FormPage from './Page2';
import FormPage2 from './Page1';




class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (<Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Easy Transportation</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
            <Link to="/Acceuil" className="nav-link">
              <MDBNavLink >Acceuil</MDBNavLink>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/Page1" className="nav-link">
              <MDBNavLink  >Créez un compte
              
              </MDBNavLink>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/Page2" className="nav-link">
              <MDBNavLink >se connectez
              
              </MDBNavLink>
              </Link>
            </MDBNavItem>
            
            <MDBNavItem>
              
            </MDBNavItem>
          </MDBNavbarNav>
         
        </MDBCollapse>
      </MDBNavbar>
      
            <Route exact path="/" component={Acceuil} />
            <Route path="/FormPage2" component={FormPage2} />
            <Route path="/FormPage" component={FormPage} />
            
            
          
      </Router>
    );
  }
}

export default NavbarPage;