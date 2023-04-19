import React, { useState } from "react";
import './Search.css';

function Search({ posts, setFilteredPosts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPosts(filteredPosts);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search posts by title"
        className="search-input"
      />
    </div>
  );
}

export default Search;
