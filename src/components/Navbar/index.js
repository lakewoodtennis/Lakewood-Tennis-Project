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

  const button = {
    color: 'black',
    width: 1400,
    display: 'block', 
    align: 'center',
    alignItems:'center', 
    textAlign: 'center',
    padding: '70px'
  };

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img className="navLogo" src={require('../../images/tempLogo.png')} alt='logo' align='left' />
        </NavLink>
        <Bars />
        <NavMenu>
          <Link activeClass = "active" to = "shopInfo" spy = {true} smooth = {true} offset = {-70} delay = {0} style = {{padding: 40, color:"white", fontSize: 20}}>
            Information
          </Link>
          <Link activeClass = "active" to = "reservation" spy = {true} smooth = {true} offset = {-70} delay = {0} style = {{padding: 40, color:"white", fontSize: 20}}>
            Reservations
          </Link>
          <Link activeClass = "active" to = "Tournaments" spy = {true} smooth = {true} offset = {-70} delay = {0} style = {{padding: 40, color:"white", fontSize: 20}}>
            Tournaments
          </Link>
          <Link activeClass = "active" to = "singles" spy = {true} smooth = {true} offset = {-70} delay = {0} style = {{padding: 40, color:"white", fontSize: 20}}>
            Singles Ladder
          </Link>
          <Link activeClass = "active" to = "profiles" spy = {true} smooth = {true} offset = {-70} delay = {0} style = {{padding: 40, color:"white", fontSize: 20}}>
            About Us
          </Link>
        </NavMenu>
        <NavBtn>
          <Link activeClass = "active" to = "contactInfo" spy = {true} smooth = {true} offset = {-70} delay = {0} style = {{padding: 40, color:"white", fontSize: 20}}>
            Contact Us
            </Link>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
