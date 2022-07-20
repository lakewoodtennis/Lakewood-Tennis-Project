import React from 'react';
import {useState, useEffect} from 'react';
const Tournaments = () => {
  const [tournData, settournData] = useState([]);

  {/* Tounament api setup */}
  const gettournData = async () => {
    try{
      {/*api link: `https://sheet.best/api/sheets/${process.env.REACT_APP_TOURNAMENT_GOOGLE_SHEETS_KEY}`*/}
      const res = await fetch(`https://sheet.best/api/sheets/${process.env.REACT_APP_TOURNAMENT_GOOGLE_SHEETS_KEY}`);
      const tournData = await res.json();
      settournData(tournData);
    }
    catch(error){
      console.log('error');
    }
  }

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

    useEffect(() => {
      gettournData();
    }, []);
  return (
    <div style={infoStyle}>
        <h1 className = "Tournaments" style = {{fontWeight:'bold', fontSize: 40}}> Tournaments </h1>
        <p1>
            Information about ongoing tournaments
        </p1>

  
        {/*functionality of showing tournament info in a table format*/}
        
        <table
          style={{"borderCollapse": "collapse", "padding": "auto", "width": "100%", "border": "1px solid black"}}
         className="table table-hover">
          <thead style={{"borderCollapse": "collapse", "padding": "auto", "width": "100%", "border": "1px solid black"}}>
            <tr style={{"borderCollapse": "collapse", "padding": "auto", "width": "100%", "border": "1px solid black"}}>
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
  );
};

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
  paddingLeft: 'auto'
}

export default Tournaments;