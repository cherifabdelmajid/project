import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import {BrowserRouter, Route, Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";
    import NavbarPage from './Navbar';
    import FormPage from './Page2';
    import Acceuil from './Acceuil';

import FormPage2 from './Page1';
import FormPage3 from './AutocompletePage'
import CardExample from './CardExemple'


export default () => {
    
    return (
        
        <div >
      <NavbarPage></NavbarPage>
    
    <Acceuil></Acceuil>
        
        
        
        
        <CardExample></CardExample>
              </div>
              
    )}
    
    
   
