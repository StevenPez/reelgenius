import React, { useState } from 'react';
import './App.css';
import Pref from './pages/Pref';
import HistoryPage from './pages/History';
import RecommendationsPage from './pages/Recommendations';
import LandingPage from './pages/LandingPage';

function App() {
  const[recommendations, setRecommendations] = useState([])
  console.log(recommendations)

  //selects page based on link
  let link = window.location.pathname

  return(
    <div> 
      {link === '/' ? <LandingPage/> :
      (link === '/Recommendations' ? <RecommendationsPage recs = {recommendations}/> :
      (link === '/Preferences' ? <Pref setRecs = {setRecommendations} /> :
      (link === '/History' ? <HistoryPage/> : <LandingPage/>)))}
    </div>
  );
}

export default App;
