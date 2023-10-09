import React, { useState } from 'react';
import logo from '../logo.svg';
export default function Pref(){
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
        <div className="App">
          <header className="App-header">
            <div class="navBar">
              <a href='/'>ReelGenius</a>
              <a  href="/Recommendations">Recommendations</a>
              <a id="activeNav" href="/Preferences">Preferences</a>
              <a href="/History">History</a>
            </div>
          </header>
          <body className='App-body'>
            {/* <table>
              <td>
                <input type='checkbox' id='a'></input><label for='a'><div onClick={(e)=>e.target.classList.toggle('active')}><img src={logo} className="App-logo" alt="logo" /> <br/>Title: "test" <br/> Rating: 6</div></label>
              </td>
              esa
            </table> */}
            
            <h1>Genre</h1>
            
            <table id='myGenreTable'>
              
              <caption>Select a few of your favorites below<br></br></caption>
              
            <div className="GenreTable" style={{ userSelect: "none" }}>
              {genres.map((val, key) => {
                return (
                  <td key = {val.id} align='center'>
                    <div onClick={(e)=>e.target.classList.toggle('activeGenre')} className='genre'>
                    {val.name}</div></td>
                )
              })}
              </div>
            </table>
            <br></br>
          
            <h1>Movies you love</h1>
            
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
                    <div onClick={(e)=>e.target.classList.toggle('activeMovie')} >
                      <img src={logo} className="App-logo" alt="logo" align='center'/><br/>
                      Title: {val.name}<br/>
                      Rating: {val.rating}</div></td>
                )
              })}
              </div>
            </table>
            <br></br>
    
    
            
            <h1>Movies you don't</h1>
            
            <table>
              
              <caption><label for="searchbar">Select a few of your least favorites below<br></br></label>
            <input type="text" id="searchbar" value={searchValue2} onChange={onChange2} /></caption>
              
            <div className="MovieTable" style={{ userSelect: "none" }}>
              {movieList.filter(val => {
                const searchName2 = searchValue2.toLowerCase();
                const name = val.name.toLowerCase();
                return name.startsWith(searchName2)
              }).map((val, key) => {
                return (
                  <td key = {val.id} align='center'>
                    <div onClick={(e)=>e.target.classList.toggle('activeMovie')}>
                      <img src={logo} className="App-logo" alt="logo" /><br/>
                      Title: {val.name}<br/>
                      Rating: {val.rating}</div></td>
                )
              })}
              </div>
            </table>
            <br></br>
            </body>
        </div>
        
      );
}