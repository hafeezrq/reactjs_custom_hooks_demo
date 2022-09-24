import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onTermSubmit(searchTerm);
  };

  return (
    <div className='searchBar ui segment'>
      <form onSubmit={onSubmit} className='ui form'>
        <div className='ui field'>
          <label htmlFor=''>Video Search</label>
          <input
            type='text'
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
