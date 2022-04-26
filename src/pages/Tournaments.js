import React from 'react';
import {useState, useEffect} from 'react';
const Tournaments = () => {
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
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Tournaments</h1>
      <div>
        
        {data.map(item => (
          <div>
            <h2>
              {item.dates} {item.level} {item.age_group}
            </h2>
            <button
              type="button"
              onClick={(e) => {
              e.preventDefault();
              window.open(item.link,"_blank");
              //window.location.href= item.link;
            }}
              > Link to Tournament</button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;