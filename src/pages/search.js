import React, { useState } from "react";
import "../style/search.css";

const Search = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [level, setLevel] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Experience:", experience);
    console.log("Level:", level);
  };

  return (
    <div className="search-container">
      <h2>Search Players</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience:</label>
          <input type="number" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Enter experience" />
        </div>
        <div className="form-group">
          <label htmlFor="level">Level:</label>
          <input type="number" id="level" value={level} onChange={(e) => setLevel(e.target.value)} placeholder="Enter level" />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
