import React from 'react';
import './searchform.css';

function SearchForm({submitHandler}) {

    const searchRes = (e) => { 
        e.preventDefault();
        let searchQuery = e.target.title.value;
        submitHandler(searchQuery);
      }

    return (
        <form onSubmit={searchRes} className="search">
            <label className="search__label">Search Keyword:</label>
            <input className="search__input" type="text" name="title" ></input>
            <button className="search__button" type="submit">SEARCH</button>
        </form>
    )
}
    
export default SearchForm;