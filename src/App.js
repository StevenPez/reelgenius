import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Pref from './pages/Pref';
import HistoryPage from './pages/History';
import RecommendationsPage from './pages/Recommendations';
import LandingPage from './pages/LandingPage';

function App() {
  const[recommendations, setRecommendations] = useState([])
  console.log(recommendations)
  const totalPref = []
  const[historicalPref, setHistory] = useState([])

  //selects page based on link
  let link = window.location.pathname

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header activeView={link}/>}>
          <Route index element={<LandingPage />} />
          <Route path="Recommendations" element={<RecommendationsPage recs = {recommendations} />} />
          <Route path="Preferences" element={<Pref setRecs = {setRecommendations} totalPref = {totalPref} setHistory = {setHistory} historicalPref = {historicalPref}/>} />
          <Route path="History" element={<HistoryPage historicalPref = {historicalPref}/>} />
          <Route path="*" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;