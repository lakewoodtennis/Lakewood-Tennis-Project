import React from 'react';
import './App.css';
import './Profiles.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import court1 from './images/courtImages/court1.jpg';
import court2 from './images/courtImages/court2.jpg';
import court3 from './images/courtImages/court3.jpg';
import court5 from './images/courtImages/court5.jpg';
import court6 from './images/courtImages/court6.jpg';
import court7 from './images/courtImages/court7.jpg';
import center from './images/tenniscenter.jpg';
import silva from './images/silva.jpg';
import kourts from './images/kourts.svg';
import tem from './images/tem.jpg';
import Popup from './popupWindows/Popup';
import './popupWindows/buttonStyle.css';
import {useState, useEffect} from 'react';
import { Autocomplete } from '@react-google-maps/api';
import  {Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';



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

  {/* Tounament api setup */}
  const [tournData, settournData] = useState([]);
  const gettournData = async () => {
    try{
    {/*api link: https://sheet.best/api/sheets/01e8f551-bd88-4744-b224-781ee9a817cf'*/}
      const res = await fetch('');
      const tournData = await res.json();
      settournData(tournData);
    }
    catch(error){
      console.log('error');
    }
  }

    useEffect(() => {
      gettournData();
    }, []);

    {/* Singles Ladder api setup */}
    const [ladderData, setladderData] = useState([]);
  const getladderData = async () => {
    try{
    {/*api link: https://sheet.best/api/sheets/2f8bd442-bbfd-4826-a098-b9f4c48eae19*/}
      const res = await fetch('');
      const ladderData = await res.json();
      setladderData(ladderData);
    }
    catch(error){
      console.log('error');
    }
  }

    useEffect(() => {
      getladderData();
    }, []);
  
    {/* Function to help set up Singles Ladder data */}
    const ladderRows = ladderData.map(item => (
      <tr>
        <td align='center'>{item.ranking}</td>
        <td align='center'>{item.name}</td>
      </tr>
    ));

    {/* Function to help set up Tournament data */}
    const tournRows = tournData.map(item => (
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
      width: '100%',
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
    }

    const kourts = {
      textAlign: 'center',
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      width: '100%'
    }

    const profileName = {
      display: 'block',
      color: 'black',
      align: 'center',
      alignItems:'center', 
      textAlign: 'center',
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
      padding: '60px',
      margin: 'auto'
    }



  return (
    <Router>
      <Navbar/>
      <Routes>
      </Routes>

      {/*HOME*/}
      <div style= {infoStyle}>
        <h1 className = "home" style = {{fontWeight:'bold', fontSize: 60}}> Welcome to Lakewood Tennis Center ! </h1>
        <br></br>
        <p1>
            Lakewood Tennis Center is a 14-tennis court facility located in the heart of Lakewood, California. We are open to the public 
            and run many UTSA Junior tournaments, and adult singles tournaments and other leagues. Lakewood Tennis Center also supplies 
            equipment such as ball rentals at an affordable and competitive price by a friendly and knowledgable staff. Instructors
            are also available on-site to teach you everything you want to know about tennis. Feel free to expore this website to find
            out more information about our facility such as hours, information about or amazing instructors, information on how to 
            make a reservation, and tournaments. Book a court or lesson today!
        </p1>
        <br></br>
        <br></br>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={court1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={court2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={court3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={court5}
      alt="Fourth slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={court6}
      alt="Fifth slide"
    />

  </Carousel.Item><Carousel.Item>
    <img
      className="d-block w-100"
      src={court7}
      alt="Sixth slide"
    />

  </Carousel.Item>
</Carousel>


        {/*HOURS OF OPERATION + FEES*/}
        <br></br>
<div>
 <h1 className = "shopInfo" style = {{fontWeight:'bold', fontSize: 30}}>⏰ Hours of Operation</h1>
   <br></br>
    <h2 style = {{fontWeight:'bold'}}>Shop Hours</h2>
    <p>Monday - Friday 8:00 am - 9:00 pm</p>
    <p>Saturday & Sunday 7:00 am - 5:00 pm</p>
</div>

<h1 className = "shopInfo" style = {{fontWeight:'bold', fontSize: 30}}>💲 Costs</h1>
<br></br>
<br></br>
      <div className = "shopBox">
          
        <div style = {{marginRight:'2em'}}>
          <h2 style = {{fontWeight: 'bold'}}>Court Rental Schedule</h2>
          <p>Monday-Friday 8:00 am to 3:00 pm - $6.00 per hour/court</p>
          <p>Monday-Friday 3:00 pm to 9:00 pm - $12.00 per hour/court</p>
          <p>Weekend & Holidays 7:00 am to 5:00 pm - $10.00 per hour/court</p>
        </div>

        <div>
          <h2 style = {{fontWeight: 'bold'}}>Ball Machine Fees</h2>
          <p>Monday-Friday 8:00 am to 3:00 pm - $14.00 per hour/court</p>
          <p>Monday-Friday 3:00 pm to 9:00 pm - $20.00 per hour/court</p>
          <p>Weekend & Holidays 7:00 am to 5:00 pm - $18.00 per hour/court</p>
        </div>
        </div>
      </div>

      {/*HOME IMAGE*/}
      <div>
        <img className="photo" alt =""  src={center} style={{width:'100%'}}></img>
      </div>

      {/*RESERVATIONS*/}
      <div style ={infoStyle} class = "reservations">
        <h1 style = {{fontWeight:'bold', fontSize: 40}}> Reservations </h1>
        <br></br>
        <p1>
            Courts must be reserved in advance.
            To book a court, visit the <a href="https://www.kourts.com/" target = "_blank" rel="noreferrer noopener">Kourts website</a> and search "Lakewood Tennis Center" under the "courts" tab!
        </p1>
        
      </div>

      {/*TOURNAMENTS*/}
      
      <div style={infoStyle}>
        <h1 className = "Tournaments" style = {{fontWeight:'bold', fontSize: 40}}> Tournaments </h1>
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
            {tournRows}
            </tbody>
        </table>
      </div>
  
      {/*SINGLES LADDER*/}
      <div style={infoStyle}>
        <h1 className = "singles" style = {{fontWeight:'bold', fontSize: 40}}> Singles Ladder </h1>
        <p1 style = {{justifyContent: "flex", align : "left"}}>
        Lakewood Tennis Ladder rules:<br/>                                              	
        1.  Challenge Guidelines: Players may challenge upwards a maximum of three positions. Challengers must issue the challenge to higher players and matches must be accepted and scheduled within three weeks of the challenge, unless both players agree to an extension, or the ladder director (Head Pro or Tennis Director) accepts a reasonable reason for a delay such as a challenged player being out of town or injured. In any event, all matches must be played within five weeks, or the challenged player is dropped from the ladder.<br/> 
        2.  Time Between Challenges: To avoid excess challenges against any single player, no player may be challenged within one week of having played any challenge match.<br/> 
        3.   Challenger Responsibilities: Challengers will make all needed court reservations. Please reserve a minimum of two hours when making reservations. (Players will split the court fees) The challenger will supply a new can of balls for the match. All matches are to be played at Lakewood Tennis Center. The time of matches must be convenient for both players.<br/> 
        4.   Reporting Scores: Winners of matches must report scores to the ladder director within 48 hours of the match.  Email to Eric lakewood10s@gmail.com<br/> 
        5.   Post-Match Positions: If the higher position player wins the match, there is no change of position. If the challenger wins the match, he or she moves into the loser's position, and everyone in between moves down one place.<br/> 
        6.   Playing Format: All matches will be the best of two sets.  If you split sets, it will be determined by a “Match Tie-Break” up to 10.  All other aspects of fair play and conduct will follow USTA guidelines. Matches stopped for bad weather or similar reasons must be completed within one week or the leading player wins.<br/> 
        7.   Joining the Ladder: A person joining an existing ladder has one initial chance to challenge anyone in any position on the ladder. If he or she loses that challenge match they will then be placed on the bottom of the ladder and must challenge to move up. The new ladder participant who wins that initial match moves into the position of the person they just defeated.<br/> 
        8.  This ladder is free other than the court fees.
        
        </p1>

        {/*functionality of showing singles ladder info in a table format*/}
        
        <table
          style={{"borderCollapse": "collapse", "padding": "5px", "width": "100%", "border": "1px solid black"}}
         className="table table-hover">
          <thead style={{"borderCollapse": "collapse", "padding": "5px", "width": "100%", "border": "1px solid black"}}>
            <tr style={{"borderCollapse": "collapse", "padding": "5px", "width": "100%", "border": "1px solid black"}}>
              <th>Ranking</th>
              <th>Name</th>
            </tr>
          </thead>
            <tbody>
            {ladderRows}
            </tbody>
        </table>
      </div>
      {/*INSTRUCTORS*/} 
      <div style={infoStyle}>
        <h className = "profiles" style = {{fontWeight:'bold', fontSize: 30}}>Instructors</h>
      </div>

    <div className = "instructorBox">
      <div>
        <link rel = "stylesheet"
          href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className = "card" style ={{marginRight: 10, height:"100%"}}>
          <img src = {silva} alt = "Silva" style ={{width: "100%"}}/>
          <h1>Victor Silva</h1>
          <p className="title"> Founder, Silva Tennis Academy</p>
          <p1>Started playing in Sao Paolo, Brazil, coached by his father, Edson. 
          He has played tennis since he was five years old and started to compete 
          seriously at 12. He won 10 national tournaments in Brazil and more 
          than 50 titles in the Brazilian Tennis Federation. He turned pro at 16 
          and earned his first ATP point shortly thereafter. Victor came to California 
          at 17 years of age, played at Wilson High School in Long Beach,then two years 
          of college at Long Beach State. Victor started Silva Tennis Academy in 2020.</p1>
          <p><button>Contact</button></p>
        </div>
      </div>

      <div>
        <link rel = "stylesheet"
          href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className = "card" style={{height:'100%'}}>
          <img src = {tem} alt = "Tem" style ={{width: "100%"}}/>
          <h1>Tem Sykahua</h1>
          <p className="title"> Founder, Tem's Amazing Tennis</p>
          <p1>Tem Sykahua is a former Men’s Open Champion. He has won many tournaments that include: 
           Men’s Open, NTRP 5.5, Junior College, College Division 3, Junior Open and Satellite, 
           Masters, etc. With over 30 years of playing experience, Tem has worked with top level 
           coaches and athletes to share his knowledge of the game. He is a current member of the 
           United States Professional Tennis Association. Tem is also an inductee to Lakewood’s 
           Hall of Fame for his new found success on students winning tournaments.</p1>

          <p><input   
          type = "button" 
          value = "Click for Contact Info" 
          onClick = {togglePopup}
          style = {{color: 'white', backgroundColor:'black'}}
        />
        {isOpen && <Popup 
          content = {<>
            <p>Location: Lakewood Tennis Center</p>
            <p>Phone: (562) 355 - 2545</p>
            <a href = "https://www.temsamazingtennis.com/" target = "_blank" rel="noreferrer noopener">My Website!</a>
          </>}
        handleClose = {togglePopup}
        />}</p>
          
      </div>
      </div>
      <br></br>
    </div> 
      {/*CONTACT US*/}   
    <div className = "contactBox">
      <div className = "contactHeader">
        <div style ={infoStyle}>
          <h className = "contactInfo" style = {{fontWeight: 'bold', fontSize: 40}}>Contact Info</h>
        </div>
      </div>

      <div class = "contactDetails">
        <p1><b>Tennis Director</b></p1>
        <br></br>
        <p1>Eric Stephens</p1>

        <p>Lakewood Tennis – 4212 Clubhouse Dr. Lakewood, CA 90712</p>
        <p>562-496-3530</p>
        {/*to get href tag*/}
        <p style = {{fontWeight: 'bold'}}>Lakewood10s@gmail.com</p>
      
        <br></br>
     
        {/*GOOGLE MAPS*/}
        <div style = {{width: '50vw', height: '25vh', alignItems: 'center'}}>
          <WrappedMap
            googleMapURL = {'https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDYxDVoaLN3_ZF4TDICgharUUQtly0lnK8'}
            loadingElement = {<div style = {{height: "100%"}}/>}
            containerElement = {<div style = {{ height: "100%", align:'center'}} />}
            mapElement = {<div style = {{ height:"150%"}} />}
            
          />
        </div>
        <br></br><br></br><br></br><br></br>  
        <a style = {{fontSize: 30, color:'white'}}href = "https://www.google.com/maps/place/Lakewood+Tennis+Center/@33.8348484,-118.1568505,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd32523cef5fb3:0x105827ec28f2a3cc!8m2!3d33.8348442!4d-118.1546727" target = "_blank" rel="noreferrer noopener"><button>Get Directions</button></a>
      </div>    
    </div>
    </Router>
  );
}

export default App;
