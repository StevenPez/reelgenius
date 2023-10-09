import React, { useState } from 'react';
import logo from '../logo.svg';
export default function HistoryPage(){
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
    const movieList = [
        {name: "Cloverfield", rating: 7, id: "1"},
        {name: "Barbie", rating: 8,id: "2"},
        {name: "Titanic", rating: 9,id: "3"},
        {name: "SAW", rating: 7,id: "4"},
        {name: "Insidious", rating: 8,id: "5"},
        {name: "Taken", rating: 9,id: "6"},
        {name: "Avengers", rating: 7,id: "7"},
        {name: "Oppenheimer", rating: 8,id: "8"},
        {name: "Spiderverse", rating: 9,id: "9"},
        {name: "MOVIE", rating: 7,id: "10"},
        {name: "Spiderverse 2", rating: 8,id: "11"},
        {name: "SAW 2", rating: 9,id: "12"},
        {name: "Coherence", rating: 7,id: "13"},
        {name: "Mamma Mia!", rating: 8,id: "14"},
        {name: "Tenet", rating: 9,id: "15"}
    ];
        
    const genres = [
        {name: "Horror"},
        {name: "Romance"},
        {name: "Action"},
        {name: "Comedy"},
        {name: "Romance"},
        {name: "Action"},
        {name: "Comedy"},
        {name: "Romance"},
        {name: "Action"},
        {name: "Comedy"}
    ];
    return (
        <div className="App" style={{overflow: 'none'}}>
          <header className="App-header">
            <div class="navBar">
              <a href='/'>ReelGenius</a>
              <a  href="/Recommendations">Recommendations</a>
              <a href="/Preferences">Preferences</a>
              <a id="activeNav" href="/History">History</a>
            </div>
          </header>
          <body className='History-body'>
            
            <h1>History</h1>
            
            <input type="text" id="searchbar" value={searchValue} onChange={onChange} />
            <table>
            <div className="MovieTable" style={{ userSelect: "none" }}>
              {movieList.filter(val => {
                const searchName = searchValue.toLowerCase();
                const name = val.name.toLowerCase();
                return name.startsWith(searchName)
              }).map((val, key) => {
                return (
                  <td key = {val.id} align='center'>
                    <div>
                      <img src={logo} className="App-logo" alt="logo" align='center'/><br/>
                      Title: {val.name}<br/>
                      Rating: {val.rating}</div></td>
                )
              })}
              </div>
            </table>
            </body>
        </div>
        
      );
}