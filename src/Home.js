import React, { useState } from 'react';
import Api from './Api';
import SearchBar from './SearchBar';
import Filters from './Filters';
import CardList from './CardList';
import './Home.css';

function Home() {
    const [results, setResults] = useState();
    const [term, setTerm] = useState();

    const handleSearch = (e, searchTerm) => {
        e.preventDefault();
        setTerm(searchTerm);
        //!  API Call for search term
    }

    return (
        <div className="Home">
            {term ? <p className='termSearched'>{`Search Results for "${term}"`}</p> :
                <>
                    <p>Citizen scientists: don't know where to begin?</p>
                    <p>We're here to help.</p>
                </>}
            <SearchBar handleSearch={handleSearch} />

            {!term ? <>
                <footer>
                    <p>Search through hundreds of websites (not really) to get you on the right path of</p>
                    <p>discovering thousands of datapoints related to your field of interest:</p>
                    <p>land, sky, water, climate change, agriculture.</p>
                </footer>
            </>
                : <div className='row results'>
                    <Filters />
                    <CardList />
                </div>}
        </div>
    );
}

export default Home;