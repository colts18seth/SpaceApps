import React from 'react';
import './SearchBar.css';

function SearchBar({ handleSearch }) {

    return (
        <div className="SearchBar">
            <form>
                <button
                    onClick={handleSearch} type='submit'>
                    Start Search
                </button>
            </form>
        </div>
    );
}

export default SearchBar;