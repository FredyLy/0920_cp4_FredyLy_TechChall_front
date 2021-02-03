import React, { useState } from "react";
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown
 } from 'reactstrap';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navstyle = {
    width:'150px', 
    margin: '15px'
  }
  
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
      </NavbarBrand>
        <img src={logo} alt='logo' style={navstyle}/>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/royal-family">Royal Family</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/assets">Assets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact Us</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
