import React from 'react';

const SearchBar = ({ setFilterWord }) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setFilterWord(inputValue);
  };

  return (
    <input
      type="text"
      id="search"
      className="searchbar"
      onChange={handleInputChange}
      placeholder="Search by city"
    />
  );
};

export default SearchBar;
