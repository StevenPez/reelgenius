import React from 'react';
import './App.css';
import Pref from './pages/Pref';
import HistoryPage from './pages/History';
import RecommendationsPage from './pages/Recommendations';
import LandingPage from './pages/LandingPage';

function App() {
  //selects page based on link
  let Page
  switch(window.location.pathname) {
    case "/":
      Page = LandingPage
      break
    case "/Recommendations":
      Page = RecommendationsPage
      break
    case "/Preferences":
      Page = Pref
      break
    case "/History":
      Page = HistoryPage
      break
  }
  return(
    <Page></Page>
  );
}

export default App;
