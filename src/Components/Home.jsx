import React, { useState } from 'react';
import './Home.css'

function SearchEngine() {
    const [searchTerm, setSearchTerm] = useState("");

    function handleInputChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleSearch(event) {
        event.preventDefault();
        const searchEngines = [
            "https://www.google.com/search?q=",
            "https://www.youtube.com/results?search_query=",
            "https://www.reddit.com/search?q=",
            "https://www.linkedin.com/search/results/all/?keywords=",
            "https://www.bing.com/search?q="
        ];
        searchEngines.forEach((engine) => {
            window.open(`${engine}${searchTerm}`, '_blank');
        });
    }

    return (
        <div className='search-container'>
            <form onSubmit={handleSearch}>
                <label>
                    Search Term:
                    <input
                        className='search-box'
                        type="text" value={searchTerm} onChange={handleInputChange} />
                </label>
                <button
                    className='search-button'
                    type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchEngine;
