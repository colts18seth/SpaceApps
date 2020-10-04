import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ handleSearch }) {
    const [term, setTerm] = useState('');

    const resetSearch = () => {
        setTerm("")
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setTerm(value);
    }
    return (
        <div className="SearchBar">
            <form>
                <input value={term} onChange={handleChange} type="text" placeholder='Enter Keywords to Search...' />
                <button
                    onClick={(e) => {
                        handleSearch(e, term);
                        resetSearch();
                    }} type='submit'>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;