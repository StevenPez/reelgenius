import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import RunML from './RunML';
import jsonData from "../Datasets/sample_2.json";

export default function Pref(props){
  var sliderVal = 0;

  function activateGenre(x, name, type) {
    x.target.classList.toggle('activeGenre');
    props.totalPref.push([type, name]);
  }

  function activateMovie(x, name, type) {
    x.target.classList.toggle('activeMovie');
    props.totalPref.push([type, name]);
  }

  function activateRatings(x) {
    // 0 for Critics, 1 for Audience
    // (1-x)Critics + (x)Audience = ratings
    props.totalPref.push(['rate', x]);
  }
  
  const [searchValue, setSearchValue] = useState('');
  const [searchValue2, setSearchValue2] = useState('');

  const onChange = (event) => {
    setSearchValue(event.target.value);
  };
  const onChange2 = (event) => {
    setSearchValue2(event.target.value);
  };

  const onSearch = (searchTerm) => {
  };
  const movieList = [];

  const count = Object.keys(jsonData.movie_title).length;
  
  for (let i = 0; i < count; i++) {
    movieList.push({name: jsonData.movie_title[i], rating: 1, id: i, img: jsonData.Poster[i]});
  }

      const genres = [
        {name: "Action & Adventure"},
        {name: "Comedy"},
        {name: "Drama"},
        {name: "Science Fiction & Fantasy"},
        {name: "Romance"},
        {name: "Classics"},
        {name: "Kids & Family"},
        {name: "Mystery & Suspense"},
        {name: "Western"},
        {name: "Horror"},
        {name: "Art House & International"},
        {name: "Faith & Spirituality"},
        {name: "Animation"}, 
        {name: "Documentary"}, 
        {name: "Special Interest"},
        {name: "Musical & Performing Arts"},
        {name: "Sports & Fitness"},
        {name: "LGBT"}, /*RT calls "Gay & Lesbian" -- TO DO Caroline be sure to fix this in ML later*/
        {name: "Cult Classics"} /*RT calls "Cult Movies"*/
      ];
      const subscriptions = [
        {name: "Netflix"},
        {name: "HBO Max"},
        {name: "Hulu"},
        {name: "Amazon Prime"},
        {name: "Disney Plus"}
      ];
    return (
        <div className="App">
          <body className='App-body'>
            {/* <table>
              <td>
                <input type='checkbox' id='a'></input><label for='a'><div onClick={(e)=>e.target.classList.toggle('active')}><img src={logo} className="App-logo" alt="logo" /> <br/>Title: "test" <br/> Rating: 6</div></label>
              </td>
              esa
            </table> */}
            
            <h3>Genre</h3>
            
            <table id='myGenreTable'>
              
              <caption>Select a few of your favorites below<br></br></caption>
              
            <div className="GenreTable" style={{ userSelect: "none" }}>
              {genres.map((val, key) => {
                return (
                  <td key = {val.id} align='center'>
                    <div onClick={e => {activateGenre(e, val.name, 'genre')}} className='genre'>
                    {val.name}</div></td>
                )
              })}
              </div>
            </table>
            <br></br>
          
            <h3>Movies You Love</h3>
            
            <table>
              
              <caption><label for="searchbar">Select a few of your favorites below<br></br></label>
            <input type="text" id="searchbar" value={searchValue} onChange={onChange} /></caption>
              
            <div className="MovieTable" style={{ userSelect: "none" }}>
              {movieList.filter(val => {
                const searchName = searchValue.toLowerCase();
                const name = val.name.toLowerCase();
                return name.startsWith(searchName)
              }).map((val, key) => {
                return (
                  <td key = {val.id} align='center'>
                    <div className='movieContainer' onClick={e => {activateMovie(e, val.name, 'movie')}} >
                      <img src={val.img} className="App-logo" alt= {val.name} align='center'/><br/>
                      Title: {val.name}</div></td>
                )
              })}
              </div>
            </table>
            <br></br>
    
            <h3>Ratings</h3>
            <p>Which ratings do you care about more?</p>
            <div className='sliderContainer'>
            <ReactSlider className="mySlider" trackClassName="mySliderTrack" thumbClassName='mySliderThumb' marks={20} min={0} max={10} defaultValue={5}
              onAfterChange={(value, index) =>
                activateRatings(value)
            }
            /> 
              <div className='flexContainer'><div>Critics</div><div className='flexContainerCenter'></div><div>Audience</div></div>
            </div>
            <br/>
            <h3>Subscriptions</h3>
            
            <table id='mySubscriptionTable' className='mySubscriptionTable2'>
            <div className="SubscriptionTable" style={{ userSelect: "none" }}>
              {subscriptions.map((val, key) => {
                return (
                  <td key = {val.id} align='center'>
                    <div onClick={e => {activateGenre(e, val.name, 'subs')}} className='subscription'>
                    {val.name}
                    </div>
                  </td>
                )
              })}
              </div>
            </table>

            <div className="generateRec">
              <RunML prefList={props.totalPref} setRecs = {props.setRecs} />
            </div>
            
            <br></br>
            </body>
        </div>
      );
}