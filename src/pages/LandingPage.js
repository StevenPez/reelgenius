import React, { useState } from 'react';
import logo from '../logo.svg';
export default function LandingPage(){
    return (
        <div className="App" style={{overflow: 'none'}}>
          <header className="App-header">
            <div class="navBar">
              <a id="activeNav" href='/'>ReelGenius</a>
              <a  href="/Recommendations">Recommendations</a>
              <a href="/Preferences">Preferences</a>
              <a href="/History">History</a>
            </div>
          </header>
          <body className='History-body'>
            
            <h1>ReelGenius</h1>
            <div className='LandingPageText'>
            ReelGenius is a movie recommendation system that relies on machine learning.
            <br/>Using user data such as: <br/>
            &ensp; Movies they have seen<br/>
            &ensp; Preferences<br/>
            &ensp; Demographic<br/>
            Will incorporate movie reviews from either Rotten Tomatoes critics or Twitter Reviews.
            Takes in user’s streaming platform preferences and only recommends movies that satisfy those.
            Using a hybrid system of both collaborative filtering and content based filtering.
            </div>

            <h1>About Us</h1>
            <div className='LandingPageText'>
            We are a small team from the University of Florida consisting of:<br/>
            &ensp; Sydney Opyrchal<br/>
            &ensp; Steven Perez<br/>
            &ensp; Caroline Rogers<br/>
            </div>
          </body>
        </div>
        
      );
}