import React, { useState } from 'react';
import logo from '../logo.svg';
export default function HistoryPage(){
    //search values for searching tables by name
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
    const movieList = []
       
    return (
        <div className="App" style={{overflow: 'none'}}>
          <body className='History-body'>
            
            <h1>History</h1>
            
            <input type="text" id="searchbar" value={searchValue} onChange={onChange} className='mySearchBar'/>
            <table>
            <div className="MovieTable" style={{ userSelect: "none" }}>
              {movieList.filter(val => {
                const searchName = searchValue.toLowerCase();
                const name = val.name.toLowerCase();
                return name.startsWith(searchName)
              }).map((val, key) => {
                return (
                  <td key = {val.id} align='center'>
                    <div className='movieContainer'>
                      <img src={val.img} className="App-logo" alt="" align='center'/>
                      {val.name}<br/>
                      Rating: {val.rating}</div></td>
                )
              })}
              </div>
            </table>
            </body>
        </div>
        
      );
}