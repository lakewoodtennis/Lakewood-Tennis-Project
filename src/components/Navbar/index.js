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
      <Nav style = {{justifyContent: 'space-evenly'}}>
      <Link activeClass = "active" to = "home" spy = {true} smooth = {true} offset = {-100} delay = {0} >
          <img className="navLogo" src={require('../../images/logotrans.png')} alt='logo'/>
        </Link>
        <Bars />
        <NavMenu>
          <Link activeClass = "active" to = "shopInfo" spy = {true} smooth = {true} offset = {-100} delay = {0} style = {{padding: 40, color:"white", fontSize: 20}}>
            Information
          </Link>
          <Link activeClass = "active" to = "reservations" spy = {true} smooth = {true} offset = {-100} delay = {0} style = {{padding: 40, color:"white", fontSize: 20}}>
            Reservations
          </Link>
          <Link activeClass = "active" to = "Tournaments" spy = {true} smooth = {true} offset = {-100} delay = {0} style = {{padding: 40, color:"white", fontSize: 20}}>
            Tournaments
          </Link>
          <Link activeClass = "active" to = "singles" spy = {true} smooth = {true} offset = {-100} delay = {0} style = {{padding: 40, color:"white", fontSize: 20}}>
            Singles Ladder
          </Link>
          <Link activeClass = "active" to = "profiles" spy = {true} smooth = {true} offset = {-100} delay = {0} style = {{padding: 40, color:"white", fontSize: 20}}>
            Instructors
          </Link>
        
          <Link activeClass = "active" to = "contactInfo" spy = {true} smooth = {true} offset = {-100} delay = {0} style = {{padding: 40, color:"white", fontSize: 20}}>
            Contact Us
            </Link>
          </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
