import React, { useState } from 'react';
import ReactSlider from 'react-slider';
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
    {name: "Toy Story", rating: 7, id: "1", img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    {name: "Jumanji (1995)", rating: 8,id: "2", img: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR10,0,182,268_AL_.jpg"},
    {name: "Grumpier Old Men", rating: 9,id: "3", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxM2YyNjMtZjUxYy00OGYyLTg0MmQtNGE2YzNjYmUyZTY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    {name: "Waiting to Exhale", rating: 7,id: "4", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTMyMTgyM15BMl5BanBnXkFtZTcwOTc4OTQyMQ@@._V1_UY268_CR4,0,182,268_AL_.jpg"},
    {name: "Father of the Bride", rating: 8,id: "5", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BOTEyNzg5NjYtNDU4OS00MWYxLWJhMTItYWU4NTkyNDBmM2Y0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    {name: "Heat", rating: 9,id: "6", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    {name: "Sabrina", rating: 7,id: "7", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3OTQ2NTk2ODNeQTJeQWpwZ15BbWU4MDQ3NTM4MDMx._V1_UX182_CR0,0,182,268_AL_.jpg"},
    {name: "Casino", rating: 8,id: "8", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    {name: "Sudden Death", rating: 9,id: "9", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BN2NjYWE5NjMtODlmZC00MjJhLWFkZTktYTJlZTI4YjVkMGNmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_UY268_CR0,0,182,268_AL_.jpg"},
    {name: "Sense and Sensibility", rating: 7,id: "10", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzk1MjU3MDQyMl5BMl5BanBnXkFtZTcwNjc1OTM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    {name: "The American President", rating: 8,id: "11", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5NDU2NDYzOF5BMl5BanBnXkFtZTYwNDk5MDI5._V1_UY268_CR4,0,182,268_AL_.jpg"},
    {name: "Dracula: Dead and Loving it", rating: 9,id: "12", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BZWQ0ZDFmYzMtZGMyMi00NmYxLWE0MGYtYzM2ZGNhMTE1NTczL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjM5ODMxODc@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    {name: "Balto", rating: 7,id: "13", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjBhNmFlZjMtMzhlYy00NDBlLWFiMjctMmE0ZjgwOGM2MTNmXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    {name: "Nixon", rating: 8,id: "14", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BNzBlOWY0ZmEtZjdkYS00ZGU0LWEwN2YtYzBkNDM5ZDBjMmI1XkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UX182_CR0,0,182,268_AL_.jpg"},
    {name: "Cutthroat Island", rating: 9,id: "15", img:"https://images-na.ssl-images-amazon.com/images/M/MV5BMDg2YTI0YmQtYzgwMi00Zjk4LWJkZjgtYjg0ZDE2ODUzY2RlL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_UX182_CR0,0,182,268_AL_.jpg"}
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
      const subscriptions = [
        {name: "Netflix"},
        {name: "HBO Max"},
        {name: "Hulu"},
        {name: "Amazon Prime"}
      ];
    return (
        <div className="App">
          <header className="App-header">
            <div class="navBar">
              <a href='/'>Reel Genius</a>
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
            
            <h3>Genre</h3>
            
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
          
            <h3>Movies you love</h3>
            
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
                    <div className='movieContainer' onClick={(e)=>e.target.classList.toggle('activeMovie')} >
                      <img src={val.img} className="App-logo" alt="logo" align='center'/><br/>
                      Title: {val.name}<br/>
                      Rating: {val.rating}</div></td>
                )
              })}
              </div>
            </table>
            <br></br>
    
    
            
            <h3>Movies you don't</h3>
            
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
                    <div  className='movieContainer' onClick={(e)=>e.target.classList.toggle('activeMovie')}>
                      <img src={val.img} className="App-logo" alt="logo" /><br/>
                      Title: {val.name}<br/>
                      Rating: {val.rating}</div></td>
                )
              })}
              </div>
            </table>
            <br></br>
            <h3>Ratings</h3>
            <p>Which ratings do you care about more?</p>
            <div className='sliderContainer'>
              <ReactSlider className="mySlider" trackClassName="mySliderTrack" thumbClassName='mySliderThumb' marks={20} min={0} max={10} defaultValue={5}/>
              <div className='flexContainer'><div>Rotten Tomatoes</div><div className='flexContainerCenter'></div><div>Twitter Users</div></div>
            </div>
            <br/>
            <h3>Subscriptions</h3>
            
            <table id='mySubscriptionTable' className='mySubscriptionTable2'>
            <div className="SubscriptionTable" style={{ userSelect: "none" }}>
              {subscriptions.map((val, key) => {
                return (
                  <td key = {val.id} align='center'>
                    <div onClick={(e)=>e.target.classList.toggle('activeGenre')} className='subscription'>
                    {val.name}
                    </div>
                  </td>
                )
              })}
              </div>
            </table>
            <br></br>
            </body>
        </div>
        
      );
}