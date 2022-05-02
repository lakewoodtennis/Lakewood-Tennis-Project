import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import center from './images/tenniscenter.jpg';
import silva from './images/silva.jpg';
import tem from './images/tem.jpg';
import Popup from './popupWindows/Popup';
import './popupWindows/buttonStyle.css';
import {useState, useEffect} from 'react';
import { Autocomplete } from '@react-google-maps/api';
//import {Link} from 'react-router-dom';


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

  const [data, setData] = useState([]);
  const getData = async () => {
    try{
      const res = await fetch('https://sheet.best/api/sheets/74066c3c-3677-4487-a7af-79f1021dd670');
      const data = await res.json();
      setData(data);
    }
    catch(error){
      console.log('error');
    }
  }

    useEffect(() => {
      getData();
    }, []);

    const rows = data.map(item => (
      <tr>
        <td align='center'>{item.dates}</td>
        <td align='center'>{item.level}</td>
        <td align='center'>{item.age_group}</td>
        <td align='center'>
        {item.link === 'TBD' ? <p>TBD</p> : 
        <button
        type="button"
        onClick={(e) => {
        e.preventDefault();
        window.open(item.link,"_blank");
      }}
        > Link to Tournament</button>}
        </td>
      </tr>
    ));

    const infoStyle = {
      color: 'black',
      width: 2000,
      display: 'block', 
      align: 'center',
      alignItems:'center', 
      textAlign: 'center',
      paddingTop: "5%",
      paddingBottom: "5%",
      display: 'block',
      align: 'center',
      alignItems:'center',
      padding: '60px'
    };

    const homeImage = {

    }


    const profileName = {
      display: 'block',
      color: 'black',
      align: 'left',
      alignItems:'left', 
      textAlign: 'left',
      fontSize: '30',
      align: 'left',
      alignItems:'left',
      padding: '60px'
    }


    const profile = {
      display: 'inline-block',
      color: 'black',
      align: 'left',
      alignItems:'left', 
      textAlign: 'center',
      paddingBottom: "5%",
      align: 'left',
      alignItems:'left',
      padding: '60px'
    }


  return (
    <Router>
      <Navbar />
      <Routes>
      </Routes>

      {/*HOME*/}
      <div style= {infoStyle}>
        <h1 style = {{fontWeight:'bold', fontSize: 40}}> Welcome to Lakewood Tennis Center ! </h1>
        <br></br>
        <p1>
            Lakewood Tennis Center supplies many things such as tennis balls for playing 
            tennis and tennis courts that are rented out for playing tennis and instructors that teach you how to play tennis.
            Legend has it the Lakewood Tennis Center is located in Lakewood, California. Feel free to explore this website to find
            more information such as hours, information about staff, ongoing events, and make a reservation!
            Don't let your dreams be dreams go out and play some tennis. <span role="img" aria-label = "racket">🎾</span>
        </p1>
        <br></br>

        {/*HOURS OF OPERATION + FEES*/}
        <br></br>
        <h1 style = {{fontWeight:'bold', fontSize: 30}}>Hours of Operation & Costs</h1>
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
        <br></br>
      </div>

      {/*HOME IMAGE*/}
      <div style= {homeImage}>
        <img className="photo" height = {50} width = {50} alt =""  src={center}></img>
      </div>

      {/*RESERVATIONS*/}
      <div style ={infoStyle} >
        <h1 style = {{fontWeight:'bold', fontSize: 40}}> Reservations </h1>
        <p1>
            Information about making reservations....
        </p1>
      </div>

      {/*TOURNAMENTS*/}
      <div style={infoStyle}>
        <h1 style = {{fontWeight:'bold', fontSize: 40}}> Tournaments </h1>
        <p1>
            Information about ongoing tournaments
        </p1>

        {/*functionality of showing tournament info in a table format*/}
        <table
          style={{"borderCollapse": "collapse", "padding": "5px", "width": "100%", "border": "1px solid black"}}
         className="table table-hover">
          <thead style={{"borderCollapse": "collapse", "padding": "5px", "width": "100%", "border": "1px solid black"}}>
            <tr style={{"borderCollapse": "collapse", "padding": "5px", "width": "100%", "border": "1px solid black"}}>
              <th >Dates</th>
              <th>Level</th>
              <th>Age Group</th>
              <th>Link to Sign-up</th>
            </tr>
          </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
      </div>

      {/*SINGLES LADDER*/}
      <div style={infoStyle}>
        <h1 style = {{fontWeight:'bold', fontSize: 40}}> Singles Ladder </h1>
        <p1>
            Information about Singles Ladder
        </p1>
      </div>

      {/*ABOUT US*/}    
      <br></br><br></br>
      <div style={infoStyle}>
        <h1 className = "profiles" style = {{fontWeight:'bold', fontSize: 40}}>About Us</h1>
        <p1>
          Short biography about Lakewood tennis center... when they opened etc ?
        </p1>
      </div>

      {/*INSTRUCTORS*/} 
      <div style={infoStyle}>
        <h className = "profiles" style = {{fontWeight:'bold', fontSize: 30}}>Instructors</h>
      </div>

      <div style = {profileName}>
        <h style = {{fontWeight: 'bold', fontSize: 30}}>Victor Silva</h>
      </div>

      <div style={profile}>
        <img src = {silva} alt = "Victor Silva" ></img>
        <p1 fontSize = {200}>Started playing in Sao Paolo, Brazil, coached by his father, Edson. 
          He has played tennis since he was five years old and started to compete 
          seriously at 12. He won 10 national tournaments in Brazil and more 
          than 50 titles in the Brazilian Tennis Federation. He turned pro at 16 
          and earned his first ATP point shortly thereafter. Victor came to California 
          at 17 years of age, played at Wilson High School in Long Beach,then two years 
          of college at Long Beach State. Victor started Silva Tennis Academy in 2020.</p1>
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

      <div style = {profileName}>
        <h style = {{fontWeight: 'bold', fontSize: 30}}>Tem Sykahua</h>
      </div>
      <div style={profile}>
        <img src = {tem} height = {500} width = {'350vw'} alt = "Tem Sykahua"></img>
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

      {/*CONTACT US*/}   
      <div style ={infoStyle}>
        <h style = {{fontWeight: 'bold', fontSize: 40}}>Contact Info</h>
        <br></br>
        <p1><b>Tennis Director</b></p1>
        <br></br>
        <p1>Eric Stephens</p1>

        <p>Lakewood Tennis – 4212 Clubhouse Dr. Lakewood, CA 90712</p>
        <p>562-496-3530</p>
        {/*to get href tag*/}
        <a>Lakewood10s@gmail.com</a>
      </div>
      <br></br>
      
      {/*GOOGLE MAPS*/}
      <div style = {{width: '25vw', height: '25vh', alignItems: 'center'}}>
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
