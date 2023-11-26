import React, { useState } from 'react';
import logo from '../logo.svg';
export default function LandingPage(){
    return (
        <div className="App">
          <header className="App-header">
            <div class="navBar">
              <a id="activeNav" href='/'>Reel Genius</a>
              <a  href="/Recommendations">Recommendations</a>
              <a href="/Preferences">Preferences</a>
              <a href="/History">History</a>
            </div>
          </header>
          <body className='Landing-body'>
            <div className='LandingPageLeftAlign'>
              
            <img src={"uflogo.png"} className="UFLogo" alt="logo" align='center'></img>
            <h3>Reel Genius</h3>
            <div className='LandingPageText'>
            Welcome to Reel Genius! This is a movie recommendation system 
            that relies on machine learning, incorporating user preferences and 
            data from IMDB, Rotten Tomatoes, and Twitter.
            </div>

            <h4>About Us</h4>
            <div className='LandingPageText'>
            We are a group of students at the University of Florida, graduating
            this coming December 2023. Reel Genius is our "Senior Project", a
            semester long project created and commpleted solely by our team,
            under the guidance of our advisor, Dr. Üngör, and our Senior Project
            coordinator, Dr. Thomas.
            </div>
            </div>
            <div className='LandingPageLeftAlign'>
            <h4>More About Reel Genius</h4>
            <div className='LandingPageTextFull'>
            Reel Genius incorporates user data such as movies they enjoy, genre preferences, favorite actors and directors, etc. 
            Recommendations are made using a hybrid system of both collaborative filtering and content-based filtering. Additionally,
            users are able to choose what ratings they want to use for their recommendations - our algorrithm incorporates data
            from critic reviews from Rotten Tomatoes and everyday reviews posted to Twitter. Users can use a slider to decide how much of 
            each dataset they want to include.
            </div>
            <h4>Sources</h4>
            <div className='LandingPageTextFull'>
            <ul>
              <li><a href='https://developer.imdb.com/non-commercial-datasets/'>https://developer.imdb.com/non-commercial-datasets/</a></li>
              <li><a href='https://www.kaggle.com/datasets/stefanoleone992/rotten-tomatoes-movies-and-critic-reviews-dataset'>https://www.kaggle.com/datasets/stefanoleone992/rotten-tomatoes-movies-and-critic-reviews-dataset</a></li>
              <li><a href='https://github.com/sidooms/MovieTweetings'>https://github.com/sidooms/MovieTweetings</a></li>
            </ul>
            </div>
            </div>
            <br/>
          </body>
        </div>
        
      );
}