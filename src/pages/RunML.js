import React from 'react';
import { useState, useEffect } from 'react';

function RunML(props) {
  const prefs = props.prefList;

  const callAPI = () => {
    alert("Head to the Recommendations tab!")
    fetch('http://192.168.19.1:5000/post_json', {
      'method':'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ 
        'param': prefs
      })
    })
    .then((response) => { return response.json() })
    .then((response) => { console.log(response.recs)
      props.setRecs(response.recs) })
    .catch(error => console.log(error))
  }
  
  return (
    <button onClick={callAPI}>
      Generate Recommendations
    </button>
  );
}

export default RunML;