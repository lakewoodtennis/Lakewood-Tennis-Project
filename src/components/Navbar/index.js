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
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img className="navLogo" src={require('../../images/tempLogo.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <Link activeClass = "active" to = "shopInfo" spy = {true} smooth = {true} offset = {-70} delay = {0} style = {{color:"white"}}>
            Information
          </Link>
          <NavLink to='/reservation' activeStyle>
            Reservations
          </NavLink>
          <NavLink to='/tournaments' activeStyle>
            Tournaments
          </NavLink>
          <NavLink to='/singles' activeStyle>
            Singles Ladder
          </NavLink>
          <Link activeClass = "active" to = "profiles" spy = {true} smooth = {true} offset = {-70} delay = {0} style = {{color:"white"}}>
            About Us
          </Link>
        </NavMenu>
        <NavBtn>
          <Link activeClass = "active" to = "contactInfo" spy = {true} smooth = {true} offset = {-70} delay = {0} style = {{color:"white"}}>
            Contact Us
            </Link>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
