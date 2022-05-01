import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import Home from './pages';
import Information from './pages/Information';
import Reservations from './pages/Reservations';
import Singles from './pages/Singles';
import Staff from './pages/Staff';
import Tournaments from './pages/Tournaments';
import cursedtennis from './images/tenniscourt.webp';
import silva from './images/silva.jpg';
import tem from './images/tem.jpg';
import Popup from './popupWindows/Popup';
import './popupWindows/buttonStyle.css';

function Map(){
  return(
    <GoogleMap
    defaultZoom = {10}
    defaultCenter = {{lat:33.83433 , lng:-118.15502}}>
    <Marker key = "tennisLocation" position = {{lat:33.83433 , lng:-118.15502}}/>
    </GoogleMap>
    
  );
}

const WrappedMap  = withScriptjs(withGoogleMap(Map));

function App() {
  const[isOpen,setIsOpen] = useState(false);

  const togglePopup = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/information' element={Information} />
        <Route path='/reservations' element={Reservations} />
        <Route path='/singles' element={Singles} />
        <Route path='/staff' element={Staff} />
        <Route path='/tournaments' element={Tournaments} />
      </Routes>

      <div>
        <h1 align='center'>‎</h1>
        <h1 align='center'> Welcome to Lakewood Tennis Center ! </h1>
        <p1 align='center'>
            Lakewood Tennis Center supplies many things such as tennis balls for playing 
            tennis and tennis courts that are rented out for playing tennis and instructors that teach you how to play tennis.
            Legend has it the Lakewood Tennis Center is located in Lakewood, California. Feel free to explore this website to find
            more information such as hours, information about staff, ongoing events, and make a reservation!
            Don't let your dreams be dreams go out and play some tennis. <span role="img" aria-label = "racket">🎾</span>
        </p1>
        <h1 align='center'>‎</h1>
        <img className="photo" alt =""  src={cursedtennis}></img>
      </div>

      {/*Shop info portion*/}
      <br></br><br></br>
      <div style={{textAlign: 'center', }}>
        <h className = "shopInfo" style = {{fontWeight:'bold', fontSize: 50, }}>Lakewood Tennis Center</h>
        <br></br>
        <h style = {{fontWeight:'bold', fontSize: 50}}>Hours of Operation/Cost Sheet</h>
        <br></br><br></br>
        <h2 style = {{fontWeight:'bold'}}>Shop Hours</h2>
        <p>Monday - Friday 8:00 am - 9:00 pm</p>
        <p>Saturday & Sunday 7:00 am - 5:00 pm</p>
        <br></br>
        <h2 style = {{fontWeight: 'bold'}}>Fee Schedules</h2>
        <p>Monday-Friday 8:00 am to 3:00 pm - $6.00 per hour/court</p>
        <p>Monday-Friday 3:00 pm to 9:00 pm - $12.00 per hour/court</p>
        <p>Weekend & Holidays 7:00 am to 5:00 pm - $10.00 per hour/court</p>
        <br></br>
        <h2 style = {{fontWeight: 'bold'}}>Ball Machine</h2>
        <p>Court Fee + $8.00 per hour</p>
      </div>

      <br></br><br></br>
       {/*Instructor profiles section*/}
      <div style={{textAlign: 'center'}}>
        <h className = "profiles" style = {{fontWeight:'bold', fontSize: 50}}>Instructor Profiles</h>
      </div>

      <div style = {{width:'25vw'}}>
        <h style = {{fontWeight: 'bold', fontSize: 30}}>Victor Silva</h>
        <img src = {silva} alt = "Victor Silva"></img>
        <p>Started playing in Sao Paolo, Brazil, coached by his father, Edson. 
          He has played tennis since he was five years old and started to compete 
          seriously at 12. He won 10 national tournaments in Brazil and more 
          than 50 titles in the Brazilian Tennis Federation. He turned pro at 16 
          and earned his first ATP point shortly thereafter. Victor came to California 
          at 17 years of age, played at Wilson High School in Long Beach,then two years 
          of college at Long Beach State. Victor started Silva Tennis Academy in 2020.</p>
        <input 
          type = "button" 
          value = "Click for Contact Info" 
          onClick = {togglePopup}
        />
        {isOpen && <Popup
          content = {<>
            <p>Contact info here</p>
          </>}
        handleClose = {togglePopup}
        />}
        
      </div>

      <div style = {{width: '25vw', }}>
        <h style = {{fontWeight: 'bold', fontSize: 30}}>Tem Sykahua</h>
        <br></br>
        <img src = {tem} height = {500} width = {'125%'} alt = "Tem Sykahua"></img>
        <p>Tem Sykahua is a former Men’s Open Champion. He has won many tournaments that include: 
           Men’s Open, NTRP 5.5, Junior College, College Division 3, Junior Open and Satellite, 
           Masters, etc. With over 30 years of playing experience, Tem has worked with top level 
           coaches and athletes to share his knowledge of the game. He is a current member of the 
           United States Professional Tennis Association. Tem is also an inductee to Lakewood’s 
           Hall of Fame for his new found success on students winning tournaments.</p>
           <input 
          type = "button" 
          value = "Click for Contact Info" 
          onClick = {togglePopup}
        />
        {isOpen && <Popup
          content = {<>
            <p>Location: Lakewood Tennis Center</p>
            <p>Phone: (562) 355 - 2545</p>
            <a href = "https://www.temsamazingtennis.com/" target = "_blank" rel="noreferrer noopener">My Website!</a>
          </>}
        handleClose = {togglePopup}
        />}
      </div>

      <br></br>
      <div >
        <h style = {{fontWeight: 'bold', fontSize: 50}}>Contact Info</h>
      </div>

      <div class = "contactInfo">
        <p>Tennis Director</p>
        <p>Eric Stephens</p>

        <p>Lakewood Tennis – 4212 Clubhouse Dr. Lakewood, CA 90712</p>
        <p>562-496-3530</p>
        {/*to get href tag*/}
        <a>Lakewood10s@gmail.com</a>
      </div>
      <br></br>
      
      <div style = {{width: '25vw', height: '25vh'}}>
        <WrappedMap
          googleMapURL = {'https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDYxDVoaLN3_ZF4TDICgharUUQtly0lnK8'}
          loadingElement = {<div style = {{height: "100%"}}/>}
          containerElement = {<div style = {{ height: "100%"}} />}
          mapElement = {<div style = {{ height:"100%"}} />}
          
        />
      </div>

      <a style = {{fontSize: 50}}href = "https://www.google.com/maps/place/Lakewood+Tennis+Center/@33.8348484,-118.1568505,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd32523cef5fb3:0x105827ec28f2a3cc!8m2!3d33.8348442!4d-118.1546727" target = "_blank" rel="noreferrer noopener">Get Directions</a>
  

    </Router>
  );
}

export default App;
