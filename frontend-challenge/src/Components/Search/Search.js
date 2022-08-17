import React, { useState } from 'react';
import Scroll from '../Scroll/Scroll';
import SearchList from '../SearchList/SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const filteredResult = details.filter(
    item => {
      return (
        item
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        item
        .subcategory
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };


  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredResult={filteredResult} />
        </Scroll>
      );
    }
  }

  return (
    <section className="">
      <div className="">
        <input 
          className=""
          type = "search" 
          placeholder = "Search articles, recipes, etc." 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;