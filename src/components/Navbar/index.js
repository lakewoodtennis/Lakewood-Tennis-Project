import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import "./styles.css";

const Navbar = () => {

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img className="navLogo" src={require('../../images/tempLogo.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/information' activeStyle>
            Information
          </NavLink>
          <NavLink to='/reservation' activeStyle>
            Reservations
          </NavLink>
          <NavLink to='/tournaments' activeStyle>
            Tournaments
          </NavLink>
          <NavLink to='/singles' activeStyle>
            Singles Ladder
          </NavLink>
          <NavLink to='/staff' activeStyle>
            About Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Contact Us</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
