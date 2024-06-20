import React, { useState } from 'react';

function Search({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex my-3">
            <input
                type="text"
                className="form-control me-2"
                placeholder="Search for items..."
                value={query}
                onChange={handleInputChange}
                required
            />
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
    );
}

export default Search;
