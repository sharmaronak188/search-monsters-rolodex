import React from 'react';

import './searchbar.styles.css';

export const SearchBar = ({ placeholder, handleChange }) => (
    <input className='search' type="search" placeholder={placeholder}
        onChange={handleChange} />
);