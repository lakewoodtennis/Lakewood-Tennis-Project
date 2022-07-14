import React from 'react';
import {useState, useEffect} from 'react';

const Singles = () => {
  {/* Singles Ladder api setup */}
  const [ladderData, setladderData] = useState([]);
  const getladderData = async () => {
    try{
    {/*api link: `https://sheet.best/api/sheets/${process.env.REACT_APP_LADDER_GOOGLE_SHEETS_KEY}`*/}
      const res = await fetch(`https://sheet.best/api/sheets/${process.env.REACT_APP_LADDER_GOOGLE_SHEETS_KEY}`);
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
    return(
      <div style={rulesStyle}>
        <h1 className = "singles" style = {{fontWeight:'bold', fontSize: 40, textAlign: 'center'}}> Singles Ladder </h1>
        <p1 style = {{flexdirection: "row"}}>
        Lakewood Tennis Ladder rules:<br/>                                              	
        1.  Challenge Guidelines: Players may challenge upwards a maximum of three positions. Challengers must issue the challenge to higher players and matches must be accepted and scheduled within three weeks of the challenge, unless both players agree to an extension, or the ladder director (Head Pro or Tennis Director) accepts a reasonable reason for a delay such as a challenged player being out of town or injured. In any event, all matches must be played within five weeks, or the challenged player is dropped from the ladder.<br/><br></br> 
        2.  Time Between Challenges: To avoid excess challenges against any single player, no player may be challenged within one week of having played any challenge match.<br/> <br></br>
        3.   Challenger Responsibilities: Challengers will make all needed court reservations. Please reserve a minimum of two hours when making reservations. (Players will split the court fees) The challenger will supply a new can of balls for the match. All matches are to be played at Lakewood Tennis Center. The time of matches must be convenient for both players.<br/> <br></br>
        4.   Reporting Scores: Winners of matches must report scores to the ladder director within 48 hours of the match.  Email to Eric lakewood10s@gmail.com<br/> <br></br>
        5.   Post-Match Positions: If the higher position player wins the match, there is no change of position. If the challenger wins the match, he or she moves into the loser's position, and everyone in between moves down one place.<br/> <br></br>
        6.   Playing Format: All matches will be the best of two sets.  If you split sets, it will be determined by a “Match Tie-Break” up to 10.  All other aspects of fair play and conduct will follow USTA guidelines. Matches stopped for bad weather or similar reasons must be completed within one week or the leading player wins.<br/> <br></br>
        7.   Joining the Ladder: A person joining an existing ladder has one initial chance to challenge anyone in any position on the ladder. If he or she loses that challenge match they will then be placed on the bottom of the ladder and must challenge to move up. The new ladder participant who wins that initial match moves into the position of the person they just defeated.<br/> <br></br>
        8.  This ladder is free other than the court fees.
        
        </p1>

        {/*functionality of showing singles ladder info in a table format*/}
        
        <table
          style={{"borderCollapse": "collapse", "padding": "auto", "width": "100%", "border": "1px solid black"}}
         className="table table-hover">
          <thead style={{"borderCollapse": "collapse", "padding": "auto", "width": "100%", "border": "1px solid black"}}>
            <tr style={{"borderCollapse": "collapse", "padding": "auto", "width": "100%", "border": "1px solid black"}}>
              <th>Ranking</th>
              <th>Name</th>
            </tr>
          </thead>
            <tbody>
            {ladderRows}
            </tbody>
        </table>
      </div>
    )
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
  padding: '60px'
}

const rulesStyle = {
  color: 'black',
  width: '100%',
  display: 'block', 
  align: 'center',
  alignItems:'center', 
  //textAlign: 'center',
  paddingTop: "5%",
  paddingBottom: "5%",
  display: 'block',
  align: 'center',
  alignItems:'center',
  padding: '60px'
}

export default Singles;