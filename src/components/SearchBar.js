import React from 'react';

const SearchBar = (props) => {

  function handleChange(event){
    // console.log(event.target.value);
    props.filterType(event.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.name} onClick={props.sortByAlphabet}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onClick={null}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleChange}>
          <option value="">All Stocks</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
