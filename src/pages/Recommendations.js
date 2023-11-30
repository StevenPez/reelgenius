import React, { useState } from 'react';
import logo from '../logo.svg';
import jsonData from "../Datasets/sample_2.json";

export default function RecommendationsPage(props){
    const [searchValue, setSearchValue] = useState('');
    const [searchValue2, setSearchValue2] = useState('');

    console.log(props.recs)
    const recs = props.recs
  
    const onChange = (event) => {
      setSearchValue(event.target.value);
    };
    const onChange2 = (event) => {
      setSearchValue2(event.target.value);
    };
  
    const onSearch = (searchTerm) => {
    };

    const movieList = [];

    console.log(recs)

    const count = recs.length;
    
    for (let i = 0; i < count; i++) {
      movieList.push({name: recs[i][0], rating: recs[i][1], id: i, img: recs[i][2]});
    }


    return (
        <div className="App" style={{overflow: 'none'}}>

          <body className='History-body'>
            
            <h5>Recommendations</h5>
            
            <input type="text" id="searchbar" value={searchValue} onChange={onChange} className='mySearchBar' />
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
                      <img src={val.img} className="App-logo" alt= {val.name} align='center'/>
                      {val.name}</div></td>
                )
              })}
              </div>
            </table>
            </body>
        </div>
        
      );
}